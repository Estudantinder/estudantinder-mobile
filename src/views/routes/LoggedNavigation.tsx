import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { StudentsContextProvider } from 'main/context'

import Settings from 'views/pages/Settings'
import TargetProfile from 'views/pages/TargetProfile'

import MainTabNavigation from './MainTabNavigation'
import Navigation from './Navigation'

const { Screen } = createStackNavigator()

const LoggedNavigation: React.FC = () => {
  return (
    <StudentsContextProvider>
      <Navigation>
        <Screen name="Main" component={MainTabNavigation} />
        <Screen name="Settings" component={Settings} />
        <Screen name="TargetProfile" component={TargetProfile} />
      </Navigation>
    </StudentsContextProvider>
  )
}

export default LoggedNavigation
