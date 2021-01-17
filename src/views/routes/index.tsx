import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'

import { AppLoading } from 'expo'

import { useAuthContext } from 'main/context/auth'

import Home from 'views/pages/Home'
import Landing from 'views/pages/Landing'
import Login from 'views/pages/Login'
import Contacts from 'views/pages/sign-up/Contacts'
import Details from 'views/pages/sign-up/Details'
import Images from 'views/pages/sign-up/Images'
import Person from 'views/pages/sign-up/Person'
import School from 'views/pages/sign-up/School'
import Secrets from 'views/pages/sign-up/Secrets'

import Navigation from './Navigation'

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
    return (
      <Navigation>
        <Screen name="Home" component={Home} />
      </Navigation>
    )
  }

  return (
    <Navigation>
      <Screen name="Landing" component={Landing} />
      <Screen name="Login" component={Login} />

      <Screen name="sign-up/Secrets" component={Secrets} />
      <Screen name="sign-up/Person" component={Person} />
      <Screen name="sign-up/School" component={School} />
      <Screen name="sign-up/Contacts" component={Contacts} />
      <Screen name="sign-up/Details" component={Details} />
      <Screen name="sign-up/Images" component={Images} />
    </Navigation>
  )
}
