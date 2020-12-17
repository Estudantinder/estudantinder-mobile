import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from 'src/pages/Home'
import Landing from 'src/pages/Landing'
import Images from 'src/pages/sign-up/Images'
import Contacts from 'src/views/sign-up/Contacts'
import Details from 'src/views/sign-up/Details'
import Person from 'src/views/sign-up/Person'
import School from 'src/views/sign-up/School'
import Secrets from 'src/views/sign-up/Secrets'

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
        <Screen name="sign-up/Contacts" component={Contacts} />
        <Screen name="sign-up/Details" component={Details} />
        <Screen name="sign-up/Images" component={Images} />
      </Navigator>
    </NavigationContainer>
  )
}
