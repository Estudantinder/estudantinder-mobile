import { fireEvent, render } from '@testing-library/react-native'
import React, { RefObject } from 'react'
import { act } from 'react-test-renderer'

import { FormHandles } from '@unform/core'
import faker from 'faker'

import Secrets from '../pages/Secrets'

describe('sign-up/pages/Secrets', () => {
  describe('when rendered:', () => {
    test('should have inputs for email, password and confirm_password', () => {
      const component = render(<Secrets />)

      expect(component.getByTestId('email')).toBeTruthy()

      expect(component.getByTestId('password')).toBeTruthy()

      expect(component.getByTestId('confirm-password')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const component = render(<Secrets />)

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should use the default values', () => {
      const email = faker.internet.email()
      const password = faker.random.alphaNumeric()

      const formRef: RefObject<FormHandles> = { current: null }

      render(
        <Secrets
          formRef={formRef}
          initialData={{ confirm_password: password, password, email }}
        />
      )

      expect(formRef.current?.getFieldValue('email')).toBe(email)
      expect(formRef.current?.getFieldValue('password')).toBe(password)
      expect(formRef.current?.getFieldValue('confirm_password')).toBe(password)
    })
  })

  describe('form events:', () => {
    test('should go to next input when SubmitEditing', () => {
      const component = render(<Secrets />)

      const email = component.getByTestId('email')

      act(email.props.onSubmitEditing)

      const password = component.getByTestId('password')

      expect(password.props.isActive).toBe(true)

      act(password.props.onSubmitEditing)

      const confirmPassword = component.getByTestId('confirm-password')

      expect(confirmPassword.props.isActive).toBe(true)
    })

    test('should submit when submit on last input', () => {
      const handleSubmit = jest.fn()

      const component = render(<Secrets handleSubmit={handleSubmit} />)

      const confirmPassword = component.getByTestId('confirm-password')

      confirmPassword.props.onSubmitEditing()

      expect(handleSubmit).toBeCalled()
    })

    test('should submit when submit button pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(<Secrets handleSubmit={handleSubmit} />)

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(handleSubmit).toBeCalled()
    })

    test('should get data from all fields when submitted', () => {
      const handleSubmit = jest.fn()
      const formRef: RefObject<FormHandles> = { current: null }

      const email = faker.internet.email()
      const password = faker.random.alphaNumeric()

      render(<Secrets handleSubmit={handleSubmit} formRef={formRef} />)

      formRef.current?.setFieldValue('email', email)
      formRef.current?.setFieldValue('password', password)
      formRef.current?.setFieldValue('confirm_password', password)

      formRef.current?.submitForm()

      expect(handleSubmit).toBeCalledWith(
        {
          email,
          password,
          confirm_password: password,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })
})
