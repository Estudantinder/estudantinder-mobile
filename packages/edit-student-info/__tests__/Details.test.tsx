import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import EditStudentInfoPropsMock from 'packages/__mocks__/EditStudentInfoProps.mock'
import StudentMock from 'packages/__mocks__/Student.mock'
import { mockedSubjectsData } from 'packages/__mocks__/subjectsData.mock'
import { StudentDetails } from 'packages/entities/Student'

import EditStudentDetailsSubmit from '../controllers/DetailsSubmit'
import EditStudentDetails from '../pages/Details'

describe('student-info/edit-student-info/Details', () => {
  describe('when rendered:', () => {
    test('should have an input for bio', () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      const component = render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('bio')).toBeTruthy()
    })

    test('should get subjects data from API', () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(mockedSubjectsData)
    })

    test('should have an input for favorites subjects', () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      const component = render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('subjects')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      const component = render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should set initial data if provided', () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
          initialData={{ bio: StudentMock.bio, subjects: StudentMock.subjects }}
        />
      )

      expect(mocks.formRef.current?.getFieldValue('bio')).toBe(StudentMock.bio)

      expect(mocks.formRef.current?.getFieldValue('subjects')).toBe(
        StudentMock.subjects
      )
    })
  })

  describe('form events:', () => {
    test('should submit on submit button pressed', () => {
      const mocks = EditStudentInfoPropsMock()

      const component = render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(mocks.handleSubmit).toBeCalled()
    })
  })

  describe('submit events:', () => {
    test('should get all data from inputs', () => {
      const mocks = EditStudentInfoPropsMock()

      render(
        <EditStudentDetails
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
          initialData={{ bio: StudentMock.bio, subjects: StudentMock.subjects }}
        />
      )

      mocks.formRef.current?.submitForm()

      expect(mocks.handleSubmit).toBeCalledWith(
        {
          bio: StudentMock.bio,
          subjects: StudentMock.subjects,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should set respective field validations errors', async () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      const handleSubmit = new EditStudentDetailsSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn(),
      })

      render(
        <EditStudentDetails
          handleSubmit={(data) => handleSubmit.handle(data)}
          formRef={mocks.formRef}
          initialData={{ bio: '', subjects: [StudentMock.subjects[0]] }}
        />
      )

      await act(async () => mocks.formRef.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('bio')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('subjects')).toBeTruthy()
    })

    test('should pass if all values are valid', async () => {
      const mocks = EditStudentInfoPropsMock<StudentDetails>()

      const handleSubmit = new EditStudentDetailsSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn(),
      })

      render(
        <EditStudentDetails
          handleSubmit={(data) => handleSubmit.handle(data)}
          formRef={mocks.formRef}
          initialData={{ bio: StudentMock.bio, subjects: StudentMock.subjects }}
        />
      )

      await act(async () => mocks.formRef.current?.submitForm())

      expect(handleSubmit.onSubmitSuccess).toBeCalled()
    })
  })
})
