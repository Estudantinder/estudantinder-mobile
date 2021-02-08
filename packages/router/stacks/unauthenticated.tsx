import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Landing from 'packages/landing'

import Navigation from '../components/StackNavigationContainer'
import { UNAUTHENTICATED_ROUTES } from '../constants'
import SignUpScreens from './sign-up'

const { Screen } = createStackNavigator()

const UnauthenticatedNavigation: React.FC = () => {
  return (
    <Navigation>
      <Screen name={UNAUTHENTICATED_ROUTES.LANDING} component={Landing} />

      <Screen name={UNAUTHENTICATED_ROUTES.SIGNUP} component={SignUpScreens} />
    </Navigation>
  )
}

export default UnauthenticatedNavigation
