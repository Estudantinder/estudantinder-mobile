import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { act } from 'react-test-renderer'

import ContactsMock from 'packages/__mocks__/Contacts.mock'
import EditTargetInfoPropsMock from 'packages/__mocks__/EditTargetInfoProps.mock'
import Contacts from 'packages/entities/Contacts'

import EditStudentContactsSubmit from '../controllers/ContactsSubmit'
import EditStudentContacts from '../pages/Contacts'

describe('student-info/edit-target-info/Contacts', () => {
  describe('when rendered:', () => {
    test('should have an input for facebook', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('facebook')).toBeTruthy()
    })

    test('should have an input for instagram', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('instagram')).toBeTruthy()
    })

    test('should have an input for whatsapp', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('whatsapp')).toBeTruthy()
    })

    test('should have an input for twitter', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('twitter')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should set initial data if provided', () => {
      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
          initialData={ContactsMock}
        />
      )

      expect(mocks.formRef.current?.getFieldValue('facebook')).toBe(
        ContactsMock.facebook
      )
      expect(mocks.formRef.current?.getFieldValue('instagram')).toBe(
        ContactsMock.instagram
      )
      expect(mocks.formRef.current?.getFieldValue('whatsapp')).toBe(
        ContactsMock.whatsapp
      )
      expect(mocks.formRef.current?.getFieldValue('twitter')).toBe(
        ContactsMock.twitter
      )
    })
  })

  describe('form events:', () => {
    test('should go to next input when keyboard submit pressed', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

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
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          handleSubmit={mocks.handleSubmit}
          formRef={mocks.formRef}
        />
      )

      mocks.formRef.current?.setFieldValue('twitter', ContactsMock.twitter)

      const twitter = component.getByTestId('twitter')

      act(twitter.props.onSubmitEditing)

      expect(mocks.handleSubmit).toBeCalled()
    })

    test('should submit when submit button pressed', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const component = render(
        <EditStudentContacts
          handleSubmit={mocks.handleSubmit}
          formRef={mocks.formRef}
        />
      )

      mocks.formRef.current?.setFieldValue('twitter', ContactsMock.twitter)

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(mocks.handleSubmit).toBeCalled()
    })
  })

  describe('submit events:', () => {
    test('should get data from all fields when submitted', () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      mocks.formRef.current?.setFieldValue('facebook', ContactsMock.facebook)
      mocks.formRef.current?.setFieldValue('instagram', ContactsMock.instagram)
      mocks.formRef.current?.setFieldValue('whatsapp', ContactsMock.whatsapp)
      mocks.formRef.current?.setFieldValue('twitter', ContactsMock.twitter)

      mocks.formRef.current?.submitForm()

      expect(mocks.handleSubmit).toBeCalledWith({
        facebook: ContactsMock.facebook,
        instagram: ContactsMock.instagram,
        whatsapp: ContactsMock.whatsapp,
        twitter: ContactsMock.twitter,
      })
    })

    test('should not pass if no input has been filled', async () => {
      const mocks = EditTargetInfoPropsMock()

      render(
        <EditStudentContacts
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      await act(async () => mocks.formRef.current?.submitForm())

      expect(mocks.handleSubmit).not.toBeCalled()
    })

    test('should set respective field validations errors', async () => {
      const mocks = EditTargetInfoPropsMock<Contacts>()

      const handleSubmit = new EditStudentContactsSubmit({
        formRef: mocks.formRef,
        onSubmitSuccess: jest.fn(),
      })

      render(
        <EditStudentContacts
          handleSubmit={(data) => handleSubmit.handle(data)}
          formRef={mocks.formRef}
        />
      )

      mocks.formRef.current?.setFieldValue('facebook', 'invalid  username')
      mocks.formRef.current?.setFieldValue('instagram', 'invalid  username')
      mocks.formRef.current?.setFieldValue('whatsapp', 'invalid phone number')
      mocks.formRef.current?.setFieldValue('twitter', 'invalid  username')

      await act(async () => mocks.formRef.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('facebook')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('instagram')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('whatsapp')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('twitter')).toBeTruthy()
    })
  })
})
