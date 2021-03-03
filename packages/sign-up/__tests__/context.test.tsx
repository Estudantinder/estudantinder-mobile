import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { Button, Text } from 'react-native'

import faker from 'faker'

import { SignUpContextConsumer, SignUpContextProvider } from '../context'

describe('sign-up/context', () => {
  describe('secrets: ', () => {
    test('should be undefined by default', () => {
      const component = render(
        <SignUpContextProvider>
          <SignUpContextConsumer>
            {(value) => <Text>Secrets: {String(value?.secrets)}</Text>}
          </SignUpContextConsumer>
        </SignUpContextProvider>
      )

      expect(component.getByText('Secrets: undefined')).toBeTruthy()
    })

    test('should set ContextUserSecrets', () => {
      const password = faker.random.alphaNumeric(8)
      const email = faker.internet.email()

      const component = render(
        <SignUpContextProvider>
          <SignUpContextConsumer>
            {(value) => (
              <>
                <Text>Email: {value?.secrets?.email}</Text>
                <Text>Password: {value?.secrets?.password}</Text>
                <Text>Confirm Password: {value?.secrets?.password}</Text>
                <Button
                  title="setSecrets"
                  onPress={() =>
                    value?.setSecrets({
                      confirm_password: password,
                      email,
                      password,
                    })
                  }
                />
              </>
            )}
          </SignUpContextConsumer>
        </SignUpContextProvider>
      )

      const button = component.getByText('setSecrets')

      fireEvent.press(button)

      expect(component.getByText(`Email: ${email}`)).toBeTruthy()
      expect(component.getByText(`Password: ${password}`)).toBeTruthy()
      expect(component.getByText(`Confirm Password: ${password}`)).toBeTruthy()
    })
  })
})
