import { render } from '@testing-library/react-native'
import React from 'react'

import MockNavigator, { Screen } from 'packages/__tests__/utils/navigation.mock'
import { waitNavigationRender } from 'packages/__tests__/utils/wait_navigation_render'

import EditStudentSecrets, { EditStudentSecretsProps } from '../pages/Secrets'

describe('edit-student-info/secrets', () => {
  const pageProps: EditStudentSecretsProps = {
    formRef: { current: null },
    handleSubmit: jest.fn(),
  }

  describe('when rendered:', () => {
    test('should have email input', async () => {
      const { queryByTestId } = render(
        <MockNavigator>
          <Screen name="secrets">
            {() => <EditStudentSecrets {...pageProps} />}
          </Screen>
        </MockNavigator>
      )

      await waitNavigationRender()

      expect(queryByTestId('email')).not.toBeNull()
    })

    test('should have a password input', async () => {
      const { queryByTestId } = render(
        <MockNavigator>
          <Screen name="secrets">
            {() => <EditStudentSecrets {...pageProps} />}
          </Screen>
        </MockNavigator>
      )

      await waitNavigationRender()

      expect(queryByTestId('password')).not.toBeNull()
    })

    test('should have a confirm password input', async () => {
      const { queryByTestId } = render(
        <MockNavigator>
          <Screen name="secrets">
            {() => <EditStudentSecrets {...pageProps} />}
          </Screen>
        </MockNavigator>
      )

      await waitNavigationRender()

      expect(queryByTestId('confirm-password')).not.toBeNull()
    })
  })
})
