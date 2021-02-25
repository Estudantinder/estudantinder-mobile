import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import EditTargetInfoPropsMock from 'packages/__mocks__/EditTargetInfoProps.mock'
import { mockedSchoolData } from 'packages/__mocks__/schoolsData.mock'
import StudentMock from 'packages/__mocks__/Student.mock'

import EditStudentSchoolSubmit from '../controllers/SchoolSubmit'
import EditStudentSchool from '../pages/School'

describe('student-info/edit-target-info/School', () => {
  describe('when rendered:', () => {
    test('should have a select for school ', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('school')).toBeTruthy()
    })

    test('should have a select for course', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )
      expect(component.getByTestId('course')).toBeTruthy()
    })

    test('should have a select for school year', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )
      expect(component.getByTestId('school_year')).toBeTruthy()
    })

    test('should have a select for shift', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )
      expect(component.getByTestId('shift')).toBeTruthy()
    })

    test('should have an input for classroom', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )
      expect(component.getByTestId('classroom')).toBeTruthy()
    })

    test('should have a button for submit', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )
      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should call useSchoolData hook to get schools information', () => {
      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(mockedSchoolData).toBeCalled()
    })

    test('should use default values on inputs', () => {
      const { school, course, shift, school_year, classroom } = StudentMock

      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
          initialData={{ classroom, school, course, shift, school_year }}
        />
      )

      expect(mocks.formRef.current?.getFieldValue('school')).toBe(school.id)
      expect(mocks.formRef.current?.getFieldValue('course')).toBe(course.id)
      expect(mocks.formRef.current?.getFieldValue('shift')).toBe(String(shift))
      expect(mocks.formRef.current?.getFieldValue('school_year')).toBe(
        String(school_year)
      )
      expect(mocks.formRef.current?.getFieldValue('classroom')).toBe(classroom)
    })
  })

  describe('form events:', () => {
    test('should submit when last input keyboard submit pressed', () => {
      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      mocks.formRef.current?.getFieldRef('classroom').props.onSubmitEditing()

      expect(mocks.handleSubmit).toBeCalled()
    })

    test('should submit when submit button is pressed', () => {
      const mocks = EditTargetInfoPropsMock()

      const component = render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(mocks.handleSubmit).toBeCalled()
    })

    test('should get all field values when submitted', () => {
      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      mocks.formRef.current?.setFieldValue('school', StudentMock.school.id)
      mocks.formRef.current?.setFieldValue('course', StudentMock.course.id)
      mocks.formRef.current?.setFieldValue(
        'school_year',
        StudentMock.school_year
      )
      mocks.formRef.current?.setFieldValue('shift', String(StudentMock.shift))
      mocks.formRef.current?.setFieldValue('classroom', StudentMock.classroom)

      mocks.formRef.current?.submitForm()

      expect(mocks.handleSubmit).toBeCalledWith({
        school: expect.any(Object),
        course: expect.any(Object),
        school_year: StudentMock.school_year,
        shift: String(StudentMock.shift),
        classroom: StudentMock.classroom,
      })
    })
  })

  describe('submit events:', () => {
    test('should show validation error if field is invalid', async () => {
      const mocks = EditTargetInfoPropsMock()

      const schoolSubmit = new EditStudentSchoolSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn,
      })

      render(
        <EditStudentSchool
          formRef={mocks.formRef}
          handleSubmit={(data) => schoolSubmit.handle(data)}
        />
      )

      await act(async () => mocks.formRef.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('school')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('course')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('school_year')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('shift')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('classroom')).toBeTruthy()
    })
  })
})
