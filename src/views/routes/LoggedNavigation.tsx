import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import MainTabNavigation from './MainTabNavigation'
import Navigation from './Navigation'

const { Screen } = createStackNavigator()

const LoggedNavigation: React.FC = () => {
  return (
    <Navigation>
      <Screen name="Main" component={MainTabNavigation} />
    </Navigation>
  )
}

export default LoggedNavigation
