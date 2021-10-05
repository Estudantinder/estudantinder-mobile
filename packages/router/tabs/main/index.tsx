import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect } from 'react'

import { useMainContext } from 'packages/main/context'
import Home from 'packages/main/home'
import Matches from 'packages/main/matches'
import UserProfile from 'packages/main/user-profile'
import { useToggleThemeContext } from 'packages/styles/context'
import alertModal from 'packages/utils/alertModal'

import { MAIN_ROUTES } from '../../constants'
import TabBarIcon from './TabBarIcon'
import TabBarLabel from './TabBarLabel'

export type MainTabsNavigationPageParams = {
  [MAIN_ROUTES.HOME]: undefined
  [MAIN_ROUTES.MATCHES]: undefined
  [MAIN_ROUTES.USER_PROFILE]: undefined
}

const { Navigator, Screen } =
  createBottomTabNavigator<MainTabsNavigationPageParams>()

export default function MainTabNavigation() {
  const { theme } = useToggleThemeContext()

  // load profile now because it's needed for the user profile screen
  const { getProfile } = useMainContext()

  useEffect(() => {
    const fn = async () => {
      try {
        await getProfile()
      } catch (error) {
        alertModal(error)
      }
    }

    fn()
  }, [getProfile])

  return (
    <Navigator
      initialRouteName={MAIN_ROUTES.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => TabBarIcon({ route, ...props }),
        tabBarLabel: (props) => TabBarLabel({ route, ...props }),
        tabBarActiveTintColor: theme.base.purple,
        tabBarInactiveTintColor: theme.base.purple,
        headerShown: false,
      })}
    >
      <Screen name={MAIN_ROUTES.MATCHES} component={Matches} />
      <Screen name={MAIN_ROUTES.HOME} component={Home} />
      <Screen name={MAIN_ROUTES.USER_PROFILE} component={UserProfile} />
    </Navigator>
  )
}
