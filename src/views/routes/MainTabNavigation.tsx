import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Home from 'views/pages/Home'
const { Navigator, Screen } = createBottomTabNavigator()

export default function MainTabNavigation() {
  return (
    <Navigator>
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
