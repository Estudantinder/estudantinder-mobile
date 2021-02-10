import { render } from '@testing-library/react-native'
import React, { RefObject } from 'react'
import { act } from 'react-test-renderer'

import { FormHandles } from '@unform/core'
import faker from 'faker'
import { mocked } from 'ts-jest/utils'

import api from 'packages/api'

import Secrets from '../pages/Secrets'

jest.mock('packages/api')

jest.mock('@react-navigation/native')

const mockedApi = mocked(api, true)

describe('sign-up/Secrets', () => {
  const email = faker.internet.email()

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
    test('should show validation errors on inputs', async () => {
      const formRef: RefObject<FormHandles> = { current: null }

      const component = render(<Secrets formRef={formRef} />)

      const emailInput = component.getByTestId('email')
      const passwordInput = component.getByTestId('password')
      const confirmPasswordInput = component.getByTestId('confirm-password')

      mockApiBasedOnEmail('')

      await act(async () => formRef?.current?.submitForm())

      expect(emailInput.props.isInvalid).toBe(true)
      expect(passwordInput.props.isInvalid).toBe(true)
      expect(confirmPasswordInput.props.isInvalid).toBe(true)
    })

    test('should show error on email input if email already exists', async () => {
      const formRef: RefObject<FormHandles> = { current: null }

      const password = faker.random.alphaNumeric(8)

      const component = render(<Secrets formRef={formRef} />)
      const emailInput = component.getByTestId('email')

      mockApiBasedOnEmail(email)

      formRef.current?.setFieldValue('email', email)
      formRef.current?.setFieldValue('password', password)
      formRef.current?.setFieldValue('confirm_password', password)

      await act(async () => formRef?.current?.submitForm())

      expect(emailInput.props.isInvalid).toBe(true)
      expect(formRef.current?.getFieldError('email')).toBe(
        '[mock]: EMAIL ALREADY EXISTS'
      )
    })
  })
})
