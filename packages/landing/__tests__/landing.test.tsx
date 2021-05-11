import { act, fireEvent, render } from '@testing-library/react-native'
import React from 'react'
import { Text } from 'react-native'

import MockNavigator, { Screen } from 'packages/__tests__/utils/navigation.mock'

import Landing from '..'

import { waitNavigationRender } from 'packages/__tests__/utils/wait_navigation_render'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'

const SignUp = () => <Text>signup</Text>
const Login = () => <Text>login</Text>

describe('landing', () => {
  describe('when rendered:', () => {
    test('should have a login button', async () => {
      const { queryByTestId } = render(
        <MockNavigator>
          <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />
        </MockNavigator>
      )

      await waitNavigationRender()

      expect(queryByTestId('login-button')).not.toBeNull()
    })

    test('should have a signup button', async () => {
      const { queryByTestId } = render(
        <MockNavigator>
          <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />
        </MockNavigator>
      )

      await waitNavigationRender()

      expect(queryByTestId('signup-button')).not.toBeNull()
    })
  })

  describe('when buttons pressed:', () => {
    test('should login button go to login page', async () => {
      const { getByTestId, queryByText } = render(
        <MockNavigator>
          <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />
          <Screen name={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} />
          <Screen name={UNAUTHENTICATED_ROUTES.SIGNUP} component={SignUp} />
        </MockNavigator>
      )

      await waitNavigationRender()

      const button = getByTestId('login-button')

      act(() => fireEvent(button, 'press'))

      expect(queryByText('login')).not.toBe(null)
    })

    test('should signup button go to signup page', async () => {
      const { getByTestId, queryByText } = render(
        <MockNavigator>
          <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />
          <Screen name={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} />
          <Screen name={UNAUTHENTICATED_ROUTES.SIGNUP} component={SignUp} />
        </MockNavigator>
      )

      await waitNavigationRender()

      const button = getByTestId('signup-button')

      act(() => fireEvent(button, 'press'))

      expect(queryByText('signup')).not.toBe(null)
    })
  })
})
