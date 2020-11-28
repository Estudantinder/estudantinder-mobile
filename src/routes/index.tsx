import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from '../pages/Home'
import Landing from '../pages/Landing'
import Person from '../pages/sign-up/Person'
import School from '../pages/sign-up/School'
import Secrets from '../pages/sign-up/Secrets'

const { Navigator, Screen } = createStackNavigator()

export default function Router() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Landing"
        screenOptions={{ headerShown: false }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Landing" component={Landing} />

        <Screen name="sign-up/Secrets" component={Secrets} />
        <Screen name="sign-up/Person" component={Person} />
        <Screen name="sign-up/School" component={School} />
      </Navigator>
    </NavigationContainer>
  )
}
