import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import formRefMock from 'packages/__mocks__/formRef.mock'
import { mockedSchoolData } from 'packages/__mocks__/schoolsData.mock'
import StudentMock from 'packages/__mocks__/Student.mock'

import EditStudentSchool from '../pages/School'

describe('student-info/edit-target-info/School', () => {
  describe('when rendered:', () => {
    test('should have a select for school ', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('school')).toBeTruthy()
    })

    test('should have a select for course', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('course')).toBeTruthy()
    })

    test('should have a select for school year', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('school_year')).toBeTruthy()
    })

    test('should have a select for shift', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('shift')).toBeTruthy()
    })

    test('should have an input for classroom', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('classroom')).toBeTruthy()
    })

    test('should have a button for submit', () => {
      const component = render(<EditStudentSchool />)

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should call useSchoolData hook to get schools information', () => {
      render(<EditStudentSchool />)

      expect(mockedSchoolData).toBeCalled()
    })

    test('should use default values on inputs', () => {
      const { school, course, shift, school_year, classroom } = StudentMock

      render(
        <EditStudentSchool
          formRef={formRefMock}
          initialData={{ classroom, school, course, shift, school_year }}
        />
      )

      expect(formRefMock.current?.getFieldValue('school')).toBe(school.id)
      expect(formRefMock.current?.getFieldValue('course')).toBe(course.id)
      expect(formRefMock.current?.getFieldValue('shift')).toBe(String(shift))
      expect(formRefMock.current?.getFieldValue('school_year')).toBe(
        String(school_year)
      )
      expect(formRefMock.current?.getFieldValue('classroom')).toBe(classroom)
    })
  })

  describe('form events:', () => {
    test('should submit when last input keyboard submit pressed', () => {
      const handleSubmit = jest.fn()

      render(
        <EditStudentSchool formRef={formRefMock} handleSubmit={handleSubmit} />
      )

      formRefMock.current?.getFieldRef('classroom').props.onSubmitEditing()

      expect(handleSubmit).toBeCalled()
    })

    test('should submit when submit button is pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(
        <EditStudentSchool handleSubmit={handleSubmit} />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(handleSubmit).toBeCalled()
    })

    test('should get all field values when submitted', () => {
      const handleSubmit = jest.fn()

      render(
        <EditStudentSchool handleSubmit={handleSubmit} formRef={formRefMock} />
      )

      formRefMock.current?.setFieldValue('school', StudentMock.school.id)
      formRefMock.current?.setFieldValue('course', StudentMock.course.id)
      formRefMock.current?.setFieldValue('school_year', StudentMock.school_year)
      formRefMock.current?.setFieldValue('shift', String(StudentMock.shift))
      formRefMock.current?.setFieldValue('classroom', StudentMock.classroom)

      formRefMock.current?.submitForm()

      expect(handleSubmit).toBeCalledWith(
        {
          school: StudentMock.school.id,
          course: StudentMock.course.id,
          school_year: StudentMock.school_year,
          shift: String(StudentMock.shift),
          classroom: StudentMock.classroom,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })

  describe('submit events:', () => {
    test('should show validation error if field is invalid', async () => {
      render(<EditStudentSchool formRef={formRefMock} />)

      await act(async () => formRefMock.current?.submitForm())

      expect(formRefMock.current?.getFieldError('school')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('course')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('school_year')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('shift')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('classroom')).toBeTruthy()
    })
  })
})
