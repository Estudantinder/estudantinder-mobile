import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import SignUpAbout from 'packages/sign-up/pages/SignUpAbout'
import SignUpContacts from 'packages/sign-up/pages/SignUpContacts'
import SignUpDetails from 'packages/sign-up/pages/SignUpDetails'
import SignUpPhotos from 'packages/sign-up/pages/SignUpPhotos'
import SignUpProfile from 'packages/sign-up/pages/SignUpProfile'
import SignUpSchool from 'packages/sign-up/pages/SignUpSchool'
import SignUpSecrets from 'packages/sign-up/pages/SignUpSecrets'

import { SIGNUP_ROUTES } from '../constants'

export type SignUpNavigationPagesParamsProps = {
  [SIGNUP_ROUTES.ABOUT]: undefined
  [SIGNUP_ROUTES.CONTACTS]: undefined
  [SIGNUP_ROUTES.DETAILS]: undefined
  [SIGNUP_ROUTES.PHOTOS]: undefined
  [SIGNUP_ROUTES.PROFILE]: undefined
  [SIGNUP_ROUTES.SCHOOL]: undefined
  [SIGNUP_ROUTES.SECRETS]: undefined
}

const { Navigator, Screen } =
  createNativeStackNavigator<SignUpNavigationPagesParamsProps>()

export interface SignUpScreensProps {
  initialRoute?: keyof SignUpNavigationPagesParamsProps
  children?: undefined
}

const SignUpScreens: React.FC<SignUpScreensProps> = (props) => {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={props.initialRoute}
    >
      <Screen name={SIGNUP_ROUTES.SECRETS} component={SignUpSecrets} />
      <Screen name={SIGNUP_ROUTES.ABOUT} component={SignUpAbout} />
      <Screen name={SIGNUP_ROUTES.SCHOOL} component={SignUpSchool} />
      <Screen name={SIGNUP_ROUTES.CONTACTS} component={SignUpContacts} />
      <Screen name={SIGNUP_ROUTES.DETAILS} component={SignUpDetails} />
      <Screen name={SIGNUP_ROUTES.PHOTOS} component={SignUpPhotos} />
      <Screen name={SIGNUP_ROUTES.PROFILE} component={SignUpProfile} />
    </Navigator>
  )
}

export default SignUpScreens
