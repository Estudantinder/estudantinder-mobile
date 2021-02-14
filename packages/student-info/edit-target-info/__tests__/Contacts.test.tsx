import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import ContactsMock from 'packages/__mocks__/Contacts.mock'
import formRefMock from 'packages/__mocks__/formRef.mock'

import EditStudentContacts from '../pages/Contacts'

describe('student-info/edit-target-info/Contacts', () => {
  describe('when rendered:', () => {
    test('should have an input for facebook', () => {
      const component = render(<EditStudentContacts />)

      expect(component.getByTestId('facebook')).toBeTruthy()
    })

    test('should have an input for instagram', () => {
      const component = render(<EditStudentContacts />)

      expect(component.getByTestId('instagram')).toBeTruthy()
    })

    test('should have an input for whatsapp', () => {
      const component = render(<EditStudentContacts />)

      expect(component.getByTestId('whatsapp')).toBeTruthy()
    })

    test('should have an input for twitter', () => {
      const component = render(<EditStudentContacts />)

      expect(component.getByTestId('twitter')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const component = render(<EditStudentContacts />)

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })
  })

  describe('form events:', () => {
    test('should go to next input when keyboard submit pressed', () => {
      const component = render(<EditStudentContacts />)

      const facebook = component.getByTestId('facebook')
      const instagram = component.getByTestId('instagram')
      const whatsapp = component.getByTestId('whatsapp')
      const twitter = component.getByTestId('twitter')

      act(facebook.props.onSubmitEditing)

      expect(instagram.props.isActive).toBe(true)

      act(instagram.props.onSubmitEditing)

      expect(whatsapp.props.isActive).toBe(true)

      act(whatsapp.props.onSubmitEditing)

      expect(twitter.props.isActive).toBe(true)
    })

    test('should submit when last input keyboard submit pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(
        <EditStudentContacts handleSubmit={handleSubmit} />
      )

      const twitter = component.getByTestId('twitter')

      act(twitter.props.onSubmitEditing)

      expect(handleSubmit).toBeCalled()
    })

    test('should submit when submit button pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(
        <EditStudentContacts handleSubmit={handleSubmit} />
      )

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(handleSubmit).toBeCalled()
    })
  })

  describe('submit events:', () => {
    test('should get data from all fields when submitted', () => {
      const handleSubmit = jest.fn()

      render(
        <EditStudentContacts
          handleSubmit={handleSubmit}
          formRef={formRefMock}
        />
      )

      formRefMock.current?.setFieldValue('facebook', ContactsMock.facebook)
      formRefMock.current?.setFieldValue('instagram', ContactsMock.instagram)
      formRefMock.current?.setFieldValue('whatsapp', ContactsMock.whatsapp)
      formRefMock.current?.setFieldValue('twitter', ContactsMock.twitter)

      formRefMock.current?.submitForm()

      expect(handleSubmit).toBeCalledWith(
        {
          facebook: ContactsMock.facebook,
          instagram: ContactsMock.instagram,
          whatsapp: ContactsMock.whatsapp,
          twitter: ContactsMock.twitter,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should not pass if no input has been filled', async () => {
      const success = jest.fn()

      render(
        <EditStudentContacts formRef={formRefMock} onSubmitSuccess={success} />
      )

      await act(async () => formRefMock.current?.submitForm())

      expect(success).not.toBeCalled()
    })

    test('should set respect field validations errors', async () => {
      render(<EditStudentContacts formRef={formRefMock} />)

      formRefMock.current?.setFieldValue('facebook', 'invalid  username')
      formRefMock.current?.setFieldValue('instagram', 'invalid  username')
      formRefMock.current?.setFieldValue('whatsapp', 'invalid phone number')
      formRefMock.current?.setFieldValue('twitter', 'invalid  username')

      await act(async () => formRefMock.current?.submitForm())

      expect(formRefMock.current?.getFieldError('facebook')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('instagram')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('whatsapp')).toBeTruthy()
      expect(formRefMock.current?.getFieldError('twitter')).toBeTruthy()
    })
  })
})
