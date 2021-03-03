import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { MainContextProvider } from 'packages/main/context'
import Settings from 'packages/main/settings'
import TargetProfile from 'packages/main/target-profile'

import StackNavigation from '../components/StackNavigation'
import { AUTHENTICATED_ROUTES } from '../constants'
import MainTabNavigation from '../tabs/Main'
import EditAuthUserScreens from './edit-auth-user'

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
        <Screen
          name={AUTHENTICATED_ROUTES.TARGET_PROFILE}
          component={TargetProfile}
        />
        <Screen
          name={AUTHENTICATED_ROUTES.EDIT_AUTH_USER}
          component={EditAuthUserScreens}
        />
      </StackNavigation>
    </MainContextProvider>
  )
}

export default AuthenticatedNavigation
