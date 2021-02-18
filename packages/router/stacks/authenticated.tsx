import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { MainContextProvider } from 'packages/main/context'
import Settings from 'packages/main/settings'

import StackNavigation from '../components/StackNavigation'
import { AUTHENTICATED_ROUTES } from '../constants'
import MainTabNavigation from '../tabs/Main'

const { Screen } = createStackNavigator()

const AuthenticatedNavigation: React.FC = () => {
  return (
    <MainContextProvider>
      <StackNavigation>
        <Screen
          name={AUTHENTICATED_ROUTES.MAIN}
          component={MainTabNavigation}
        />
        <Screen name={AUTHENTICATED_ROUTES.SETTINGS} component={Settings} />
      </StackNavigation>
    </MainContextProvider>
  )
}

export default AuthenticatedNavigation
