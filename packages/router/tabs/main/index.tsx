import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import Home from 'packages/main/home'
import Matches from 'packages/main/matches'
import UserProfile from 'packages/main/user-profile'
import { useToggleThemeContext } from 'packages/styles/context'

import { MAIN_ROUTES } from '../../constants'
import TabBarIcon from './TabBarIcon'
import TabBarLabel from './TabBarLabel'

const { Navigator, Screen } = createBottomTabNavigator()

export default function MainTabNavigation() {
  const { theme } = useToggleThemeContext()

  return (
    <Navigator
      initialRouteName={MAIN_ROUTES.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => TabBarIcon({ route, ...props }),
        tabBarLabel: (props) => TabBarLabel({ route, ...props }),
      })}
      tabBarOptions={{
        activeTintColor: theme.base.purple,
        inactiveTintColor: theme.base.purple,
        activeBackgroundColor: theme.background.default,
        inactiveBackgroundColor: theme.background.default,
      }}
    >
      <Screen name={MAIN_ROUTES.MATCHES} component={Matches} />
      <Screen name={MAIN_ROUTES.HOME} component={Home} />
      <Screen name={MAIN_ROUTES.USER_PROFILE} component={UserProfile} />
    </Navigator>
  )
}
