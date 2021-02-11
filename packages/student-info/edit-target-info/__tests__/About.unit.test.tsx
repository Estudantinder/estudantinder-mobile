import { fireEvent, render } from '@testing-library/react-native'
import React, { RefObject } from 'react'
import { act } from 'react-test-renderer'

import { FormHandles } from '@unform/core'
import faker from 'faker'

import EditStudentAbout from '../pages/About'
import { STUDENT_ABOUT_SCHEMA_MIN_DATE } from '../validators'
import randomGender from './randomGender'

describe('student-info/edit-target-info/About', () => {
  describe('when rendered: ', () => {
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
  })

  describe('form events: ', () => {
    test('should go to next input when SubmitEditing', () => {
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
      const formRef: RefObject<FormHandles> = { current: null }

      const name = faker.internet.email()
      const birthDate = faker.date.between(
        STUDENT_ABOUT_SCHEMA_MIN_DATE,
        STUDENT_ABOUT_SCHEMA_MIN_DATE
      )
      const gender = randomGender()

      render(<EditStudentAbout handleSubmit={handleSubmit} formRef={formRef} />)

      formRef.current?.setFieldValue('name', name)
      formRef.current?.setFieldValue('birth_date', birthDate)
      formRef.current?.setFieldValue('gender', gender)

      formRef.current?.submitForm()

      expect(handleSubmit).toBeCalledWith(
        {
          name,
          birth_date: birthDate,
          gender,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })
})
