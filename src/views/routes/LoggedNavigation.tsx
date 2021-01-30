import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Settings from 'views/pages/Settings'

import MainTabNavigation from './MainTabNavigation'
import Navigation from './Navigation'

const { Screen } = createStackNavigator()

const LoggedNavigation: React.FC = () => {
  return (
    <Navigation>
      <Screen name="Main" component={MainTabNavigation} />
      <Screen name="Settings" component={Settings} />
    </Navigation>
  )
}

export default LoggedNavigation
