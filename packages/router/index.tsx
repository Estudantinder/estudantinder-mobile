import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'

import AppLoading from 'expo-app-loading'

import { useAuthContext } from 'packages/auth/context'

import StackNavigation from './components/StackNavigation'
import AuthenticatedNavigation from './stacks/authenticated'
import UnauthenticatedNavigation from './stacks/unauthenticated'

const { Screen } = createStackNavigator()

export default function Router() {
  const { isLoading, token, restoreToken } = useAuthContext()

  useEffect(() => {
    const restore = async () => {
      await restoreToken()
    }

    restore()
  }, [restoreToken])

  if (isLoading) {
    return (
      <StackNavigation>
        <Screen name="Splash" component={AppLoading} />
      </StackNavigation>
    )
  }

  if (token) {
    return <AuthenticatedNavigation />
  }

  return <UnauthenticatedNavigation />
}
