import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import faker from 'faker'

import MockNavigator, { Screen } from 'packages/__tests__/utils/navigation.mock'
import { waitNavigationRender } from 'packages/__tests__/utils/wait_navigation_render'

import EditStudentSecrets, { EditStudentSecretsProps } from '../pages/Secrets'

describe('edit-student-info/secrets', () => {
  const pageProps: EditStudentSecretsProps = {
    formRef: { current: null },
    handleSubmit: jest.fn(),
  }

  const TestingComponent = () => (
    <MockNavigator>
      <Screen name="secrets">
        {() => <EditStudentSecrets {...pageProps} />}
      </Screen>
    </MockNavigator>
  )

  describe('when rendered:', () => {
    test('should have email input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('email')).not.toBeNull()
    })

    test('should have a password input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('password')).not.toBeNull()
    })

    test('should have a confirm password input', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('confirm-password')).not.toBeNull()
    })

    test('should have a submit button', async () => {
      const { queryByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      expect(queryByTestId('submit-button')).not.toBeNull()
    })
  })

  describe('form completion:', () => {
    test('should set email input and return its value on submit', async () => {
      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const emailInput = getByTestId('email')

      const fakeEmail = faker.internet.email()

      fireEvent.changeText(emailInput, fakeEmail)

      expect(pageProps.formRef.current?.getFieldValue('email')).toBe(fakeEmail)

      const submitButton = getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(pageProps.handleSubmit).toBeCalledWith(
        { email: fakeEmail, password: undefined, confirm_password: undefined },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should set password input and return its value on submit', async () => {
      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const passwordInput = getByTestId('password')

      const fakePassword = faker.internet.password()

      fireEvent.changeText(passwordInput, fakePassword)

      expect(pageProps.formRef.current?.getFieldValue('password')).toBe(
        fakePassword
      )

      const submitButton = getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(pageProps.handleSubmit).toBeCalledWith(
        {
          email: undefined,
          password: fakePassword,
          confirm_password: undefined,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })

    test('should set confirm password input and return its value on submit', async () => {
      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const confirmPasswordInput = getByTestId('confirm-password')

      const fakePassword = faker.internet.password()

      fireEvent.changeText(confirmPasswordInput, fakePassword)

      expect(pageProps.formRef.current?.getFieldValue('confirm_password')).toBe(
        fakePassword
      )

      const submitButton = getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(pageProps.handleSubmit).toBeCalledWith(
        {
          email: undefined,
          password: undefined,
          confirm_password: fakePassword,
        },
        { reset: expect.any(Function) },
        undefined
      )
    })
  })

  describe('form events:', () => {
    test('should set initial data when provided', async () => {
      const fakePassword = faker.internet.password()

      pageProps.initialData = {
        confirm_password: fakePassword,
        email: faker.internet.email(),
        password: fakePassword,
      }

      const { getByTestId } = render(<TestingComponent />)

      await waitNavigationRender()

      const submitButton = getByTestId('submit-button')

      fireEvent.press(submitButton)

      expect(pageProps.handleSubmit).toBeCalledWith(
        pageProps.initialData,
        { reset: expect.any(Function) },
        undefined
      )
    })
  })
})
