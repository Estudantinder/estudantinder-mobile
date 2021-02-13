import { fireEvent, render } from '@testing-library/react-native'
import React, { RefObject } from 'react'
import { act } from 'react-test-renderer'

import { FormHandles } from '@unform/core'

import formRefMock from 'packages/__mocks__/formRef.mock'
import StudentMock from 'packages/__mocks__/Student.mock'

import EditStudentAbout from '../pages/About'

describe('student-info/edit-target-info/About', () => {
  describe('when rendered:', () => {
    test('should have a input for name', () => {
      const component = render(<EditStudentAbout />)

      expect(component.getByTestId('name')).toBeTruthy()
    })

    test('should have a input for birth date', () => {
      const component = render(<EditStudentAbout />)

      expect(component.getByTestId('birth_date')).toBeTruthy()
    })

    test('should have a input for gender', () => {
      const component = render(<EditStudentAbout />)

      expect(component.getByTestId('gender')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const component = render(<EditStudentAbout />)

      expect(component.getByTestId('gender')).toBeTruthy()
    })

    test('should use the default values', () => {
      const formRef: RefObject<FormHandles> = { current: null }

      render(
        <EditStudentAbout
          formRef={formRef}
          initialData={{
            name: StudentMock.name,
            birth_date: StudentMock.birth_date,
            gender: StudentMock.gender,
          }}
        />
      )

      expect(formRef.current?.getFieldValue('name')).toBe(StudentMock.name)

      expect(formRef.current?.getFieldValue('birth_date')).toBe(
        StudentMock.birth_date
      )

      expect(formRef.current?.getFieldValue('gender')).toBe(StudentMock.gender)
    })
  })

  describe('form events: ', () => {
    test('should go to next input when keyboard submit pressed', () => {
      const component = render(<EditStudentAbout />)

      const name = component.getByTestId('name')

      act(name.props.onSubmitEditing)

      expect(component.getByTestId('birth_date-open')).toBeTruthy()
    })

    test('should submit when submit button pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(<EditStudentAbout handleSubmit={handleSubmit} />)

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(handleSubmit).toBeCalled()
    })

    test('should get data from all fields when submitted', () => {
      const handleSubmit = jest.fn()

      render(
        <EditStudentAbout handleSubmit={handleSubmit} formRef={formRefMock} />
      )

      formRefMock.current?.setFieldValue('name', StudentMock.name)
      formRefMock.current?.setFieldValue('birth_date', StudentMock.birth_date)
      formRefMock.current?.setFieldValue('gender', StudentMock.gender)

      formRefMock.current?.submitForm()

      expect(handleSubmit).toBeCalledWith(
        {
          name: StudentMock.name,
          birth_date: StudentMock.birth_date,
          gender: StudentMock.gender,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })

  describe('submit events:', () => {
    test('should show validation error if field is invalid', async () => {
      render(<EditStudentAbout formRef={formRefMock} />)

      await act(async () => formRefMock.current?.submitForm())

      expect(formRefMock.current?.getFieldError('name')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('birth_date')).toBeTruthy()
    })
  })
})
