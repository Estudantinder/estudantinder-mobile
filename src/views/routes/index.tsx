import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'

import { AppLoading } from 'expo'

import { useAuthContext } from 'main/context/auth'

import LoggedNavigation from './LoggedNavigation'
import Navigation from './Navigation'
import SignNavigation from './SignNavigation'

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
      <Navigation>
        <Screen name="Splash" component={AppLoading} />
      </Navigation>
    )
  }

  if (token) {
    return <LoggedNavigation />
  }

  return <SignNavigation />
}
