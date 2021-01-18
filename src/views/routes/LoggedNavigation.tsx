import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Home from 'views/pages/Home'

import Navigation from './Navigation'

const { Screen } = createStackNavigator()

const LoggedNavigation: React.FC = () => {
  return (
    <Navigation>
      <Screen name="Home" component={Home} />
    </Navigation>
  )
}

export default LoggedNavigation
