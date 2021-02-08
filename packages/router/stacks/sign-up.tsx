import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SignUpContextProvider } from 'packages/sign-up/context'
import Secrets from 'packages/sign-up/pages/Secrets'

import { SIGNUP_ROUTES } from '../constants'

const { Screen, Navigator } = createStackNavigator()

const SignUpScreens: React.FC = () => {
  return (
    <SignUpContextProvider>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name={SIGNUP_ROUTES.SECRETS} component={Secrets} />
      </Navigator>
    </SignUpContextProvider>
  )
}

export default SignUpScreens
