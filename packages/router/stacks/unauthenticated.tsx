import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Login from 'packages/auth/pages/Login'
import Landing from 'packages/landing'
import { SignUpContextProvider } from 'packages/sign-up/context'

import Navigation from '../components/StackNavigationContainer'
import { UNAUTHENTICATED_ROUTES } from '../constants'
import SignUpScreens from './sign-up'

const { Screen } = createStackNavigator()

const UnauthenticatedNavigation: React.FC = () => {
  return (
    <SignUpContextProvider>
      <Navigation>
        <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />

        <Screen name={UNAUTHENTICATED_ROUTES.LOGIN} component={Login} />
        <Screen
          name={UNAUTHENTICATED_ROUTES.SIGNUP}
          component={SignUpScreens}
        />
      </Navigation>
    </SignUpContextProvider>
  )
}

export default UnauthenticatedNavigation
