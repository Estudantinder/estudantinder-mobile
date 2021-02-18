import { fireEvent, render } from '@testing-library/react-native'
import React, { RefObject } from 'react'
import { act } from 'react-test-renderer'

import { FormHandles } from '@unform/core'
import faker from 'faker'
import { mocked } from 'ts-jest/utils'

import EditTargetInfoPropsMock from 'packages/__mocks__/EditTargetInfoProps.mock'
import api from 'packages/api'

import SignUpSecrets from '../pages/Secrets'

jest.mock('packages/api')

const mockedApi = mocked(api, true)

describe('sign-up/pages/Secrets', () => {
  describe('when rendered:', () => {
    test('should have inputs for email, password and confirm_password', () => {
      const component = render(<SignUpSecrets />)

      expect(component.getByTestId('email')).toBeTruthy()

      expect(component.getByTestId('password')).toBeTruthy()

      expect(component.getByTestId('confirm-password')).toBeTruthy()
    })

    test('should have a submit button', () => {
      const component = render(<SignUpSecrets />)

      expect(component.getByTestId('submit-button')).toBeTruthy()
    })

    test('should use the default values', () => {
      const email = faker.internet.email()
      const password = faker.random.alphaNumeric()

      const formRef: RefObject<FormHandles> = { current: null }

      render(
        <SignUpSecrets
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
    test('should go to next input when keyboard submit pressed', () => {
      const component = render(<SignUpSecrets />)

      const email = component.getByTestId('email')

      act(email.props.onSubmitEditing)

      const password = component.getByTestId('password')

      expect(password.props.isActive).toBe(true)

      act(password.props.onSubmitEditing)

      const confirmPassword = component.getByTestId('confirm-password')

      expect(confirmPassword.props.isActive).toBe(true)
    })

    test('should submit when last input keyboard submit pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(<SignUpSecrets handleSubmit={handleSubmit} />)

      const confirmPassword = component.getByTestId('confirm-password')

      confirmPassword.props.onSubmitEditing()

      expect(handleSubmit).toBeCalled()
    })

    test('should submit when submit button pressed', () => {
      const handleSubmit = jest.fn()

      const component = render(<SignUpSecrets handleSubmit={handleSubmit} />)

      const submitButton = component.getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(handleSubmit).toBeCalled()
    })

    test('should get data from all fields when submitted', () => {
      const email = faker.internet.email()
      const password = faker.random.alphaNumeric()

      const mocks = EditTargetInfoPropsMock()

      render(
        <SignUpSecrets
          formRef={mocks.formRef}
          handleSubmit={mocks.handleSubmit}
        />
      )

      mocks.formRef.current?.setFieldValue('email', email)
      mocks.formRef.current?.setFieldValue('password', password)
      mocks.formRef.current?.setFieldValue('confirm_password', password)

      mocks.formRef.current?.submitForm()

      expect(mocks.handleSubmit).toBeCalledWith(
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

  const email = 'example@gmail.com'

  const mockApiBasedOnEmail = async (data: string) => {
    if (data === email) {
      mockedApi.post.mockRejectedValue({
        response: { data: { message: '[mock]: EMAIL ALREADY EXISTS' } },
      })
    } else {
      mockedApi.post.mockResolvedValue({ status: 204, data: undefined })
    }
  }

  describe('submit events:', () => {
    test('should show validation error if field is invalid', async () => {
      const mocks = EditTargetInfoPropsMock()

      render(<SignUpSecrets formRef={mocks.formRef} />)

      mockApiBasedOnEmail('')

      await act(async () => mocks.formRef?.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('email')).toBeTruthy()
      expect(mocks.formRef.current?.getFieldError('password')).toBeTruthy()
      expect(
        mocks.formRef.current?.getFieldError('confirm_password')
      ).toBeTruthy()
    })

    test('should show error on email input if email already exists', async () => {
      const password = faker.random.alphaNumeric(8)

      const mocks = EditTargetInfoPropsMock()

      render(<SignUpSecrets formRef={mocks.formRef} />)

      await mockApiBasedOnEmail(email)

      mocks.formRef.current?.setFieldValue('email', email)
      mocks.formRef.current?.setFieldValue('password', password)
      mocks.formRef.current?.setFieldValue('confirm_password', password)

      await act(async () => mocks.formRef?.current?.submitForm())

      expect(mocks.formRef.current?.getFieldError('email')).toBe(
        '[mock]: EMAIL ALREADY EXISTS'
      )
    })
  })
})
