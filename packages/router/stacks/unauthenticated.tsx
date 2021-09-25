import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import Login from 'packages/auth/pages/Login'
import Landing from 'packages/landing'
import { SignUpContextProvider } from 'packages/sign-up/context'

import StackNavigation from '../components/StackNavigation'
import { UNAUTHENTICATED_ROUTES } from '../constants'
import SignUpScreens from './sign-up'

export type UnauthenticatedNavigationPagesParamsProps = {
  [UNAUTHENTICATED_ROUTES.LANDING]: undefined
  [UNAUTHENTICATED_ROUTES.LOGIN]: undefined
  [UNAUTHENTICATED_ROUTES.SIGNUP]: undefined
}

const { Screen } =
  createNativeStackNavigator<UnauthenticatedNavigationPagesParamsProps>()

const UnauthenticatedNavigation: React.FC = () => {
  return (
    <SignUpContextProvider>
      <StackNavigation>
        <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />

        <Screen name={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} />
        <Screen
          name={UNAUTHENTICATED_ROUTES.SIGNUP}
          component={SignUpScreens}
        />
      </StackNavigation>
    </SignUpContextProvider>
  )
}

export default UnauthenticatedNavigation
