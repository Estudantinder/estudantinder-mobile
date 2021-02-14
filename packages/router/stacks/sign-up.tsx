import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Secrets from 'packages/sign-up/pages/Secrets'
import SignUpAbout from 'packages/sign-up/pages/SignUpAbout'
import SignUpContacts from 'packages/sign-up/pages/SignUpContacts'
import SignUpSchool from 'packages/sign-up/pages/SignUpSchool'

import { SIGNUP_ROUTES } from '../constants'

const { Screen, Navigator } = createStackNavigator()

export interface SignUpScreensProps {
  initialRoute?: string
  children?: undefined
}

const SignUpScreens: React.FC<SignUpScreensProps> = (props) => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={props.initialRoute}
    >
      <Screen name={SIGNUP_ROUTES.SECRETS} component={Secrets} />
      <Screen name={SIGNUP_ROUTES.ABOUT} component={SignUpAbout} />
      <Screen name={SIGNUP_ROUTES.SCHOOL} component={SignUpSchool} />
      <Screen name={SIGNUP_ROUTES.CONTACTS} component={SignUpContacts} />
    </Navigator>
  )
}

export default SignUpScreens
