import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { SignUpContextProvider } from 'packages/sign-up/context'
import Secrets from 'packages/sign-up/pages/Secrets'
import SignUpAbout from 'packages/sign-up/pages/SignUpAbout'
import SignUpSchool from 'packages/sign-up/pages/SignUpSchool'

import { SIGNUP_ROUTES } from '../constants'

const { Screen, Navigator } = createStackNavigator()

export interface SignUpScreensProps {
  initialRoute?: string
  children?: undefined
}

const SignUpScreens: React.FC<SignUpScreensProps> = (props) => {
  return (
    <SignUpContextProvider>
      <Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={props.initialRoute}
      >
        <Screen name={SIGNUP_ROUTES.SECRETS} component={Secrets} />
        <Screen name={SIGNUP_ROUTES.ABOUT} component={SignUpAbout} />
        <Screen name={SIGNUP_ROUTES.SCHOOL} component={SignUpSchool} />
      </Navigator>
    </SignUpContextProvider>
  )
}

export default SignUpScreens
