import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import EditTargetInfoPropsMock from 'packages/__mocks__/EditTargetInfoProps.mock'
import StudentMock from 'packages/__mocks__/Student.mock'
import { StudentAbout } from 'packages/entities/Student'

import EditStudentAboutSubmit from '../controllers/AboutSubmit'
import EditStudentAbout from '../pages/about'

describe('student-info/edit-target-info/About', () => {
  describe('when rendered:', () => {
    test('should have an input for name', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('name')).toBeTruthy()
    })

    test('should have an input for birth date', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('birth_date')).toBeTruthy()
    })

    test('should have an input for gender', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('gender')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('gender')).toBeTruthy()
    })

    test('should use the default values', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
          initialData={{
            name: StudentMock.name,
            birth_date: StudentMock.birth_date,
            gender: StudentMock.gender,
          }}
        />
      )

      expect(mocks.formRef.current?.getFieldValue('name')).toBe(
        StudentMock.name
      )

      expect(mocks.formRef.current?.getFieldValue('birth_date')).toBe(
        StudentMock.birth_date
      )

      expect(mocks.formRef.current?.getFieldValue('gender')).toBe(
        StudentMock.gender
      )
    })
  })

  describe('form events: ', () => {
    test('should go to next input when keyboard submit pressed', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      const name = component.getByTestId('name')

      act(name.props.onSubmitEditing)

      expect(component.getByTestId('birth_date-open')).toBeTruthy()
    })

    test('should submit when submit button pressed', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const component = render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(mocks.handleSubmit).toBeCalled()
    })

    test('should get data from all fields when submitted', () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      mocks.formRef.current?.setFieldValue('name', StudentMock.name)
      mocks.formRef.current?.setFieldValue('birth_date', StudentMock.birth_date)
      mocks.formRef.current?.setFieldValue('gender', StudentMock.gender)

      mocks.formRef.current?.submitForm()

      expect(mocks.handleSubmit).toBeCalledWith(
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
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const handleSubmit = new EditStudentAboutSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn(),
      })

      render(
        <EditStudentAbout
          formRef={mocks.formRef}
          handleSubmit={(data) => handleSubmit.handle(data)}
        />
      )

      await act(async () => mocks.formRef.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('name')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('birth_date')).toBeTruthy()
    })

    test('should pass if all values are valid', async () => {
      const mocks = EditTargetInfoPropsMock<StudentAbout>()

      const handleSubmit = new EditStudentAboutSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn(),
      })

      render(
        <EditStudentAbout
          handleSubmit={(data) => handleSubmit.handle(data)}
          formRef={mocks.formRef}
        />
      )

      mocks.formRef.current?.setFieldValue('name', StudentMock.name)
      mocks.formRef.current?.setFieldValue('birth_date', StudentMock.birth_date)
      mocks.formRef.current?.setFieldValue('gender', StudentMock.gender)

      await act(async () => mocks.formRef.current?.submitForm())

      expect(handleSubmit.onSubmitSuccess).toBeCalled()
    })
  })
})
