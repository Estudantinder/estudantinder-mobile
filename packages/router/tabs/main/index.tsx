import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Home from 'packages/main/home'
import Matches from 'packages/main/matches'
import UserProfile from 'packages/main/user-profile'
import theme from 'packages/styles/theme'

import { MAIN_ROUTES } from '../../constants'
import TabBarIcon from './TabBarIcon'
import TabBarLabel from './TabBarLabel'

const { Navigator, Screen } = createBottomTabNavigator()

export default function MainTabNavigation() {
  return (
    <Navigator
      initialRouteName={MAIN_ROUTES.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => TabBarIcon({ route, ...props }),
        tabBarLabel: (props) => TabBarLabel({ route, ...props }),
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary.purple,
        inactiveTintColor: theme.colors.primary.purple,
      }}
    >
      <Screen name={MAIN_ROUTES.MATCHES} component={Matches} />
      <Screen name={MAIN_ROUTES.HOME} component={Home} />
      <Screen name={MAIN_ROUTES.USER_PROFILE} component={UserProfile} />
    </Navigator>
  )
}
