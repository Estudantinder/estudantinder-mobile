import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import StudentMock from 'packages/__mocks__/Student.mock'

import EditStudentPhotos from '../pages/Photos'

describe('student-info/edit-target-info/Photos', () => {
  describe('when rendered:', () => {
    test('should have an input for photos', () => {
      const onSubmitSuccess = jest.fn()

      const component = render(
        <EditStudentPhotos onSubmitSuccess={onSubmitSuccess} />
      )

      expect(component.getByTestId('photos')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const onSubmitSuccess = jest.fn()

      const component = render(
        <EditStudentPhotos onSubmitSuccess={onSubmitSuccess} />
      )

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should set initial data', () => {
      const onSubmitSuccess = jest.fn()

      const component = render(
        <EditStudentPhotos
          onSubmitSuccess={onSubmitSuccess}
          initialData={{ photos: StudentMock.photos }}
        />
      )

      expect(component.getByTestId('photos').props.data).toEqual([
        ...StudentMock.photos,
        '',
      ])
    })
  })

  describe('submit events:', () => {
    test('should set error if no photo selected', () => {
      const onSubmitSuccess = jest.fn()

      const component = render(
        <EditStudentPhotos onSubmitSuccess={onSubmitSuccess} />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(onSubmitSuccess).not.toBeCalled()
    })

    test('should pass if at least 1 photo is selected', () => {
      const onSubmitSuccess = jest.fn()

      const component = render(
        <EditStudentPhotos
          onSubmitSuccess={onSubmitSuccess}
          initialData={{ photos: StudentMock.photos }}
        />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(onSubmitSuccess).toBeCalledWith({ photos: StudentMock.photos })
    })
  })
})
