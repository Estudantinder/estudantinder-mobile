import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import { AppLoading } from 'expo'

import { useAuthContext } from 'packages/auth/context'

import StackNavigation from './components/StackNavigationContainer'
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
    return (
      <StackNavigation>
        <Screen name="home">
          {() => (
            <View>
              <Text>Home</Text>
            </View>
          )}
        </Screen>
      </StackNavigation>
    )
  }

  return <UnauthenticatedNavigation />
}
