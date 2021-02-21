import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Text } from 'react-native'

import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons'

import Home from 'packages/main/home'
import Matches from 'packages/main/matches'
import UserProfile from 'packages/main/user-profile'
import theme from 'packages/styles/theme'

import { MAIN_ROUTES } from '../constants'

const { Navigator, Screen } = createBottomTabNavigator()

interface TabBarIconProps {
  color: string
  size: number
  focused: boolean
}

export default function MainTabNavigation() {
  const handleGetHomeIcon = (props: TabBarIconProps) => {
    let iconName

    if (props.focused) iconName = 'home'
    else iconName = 'home-outline'

    return (
      <MaterialCommunityIcons
        name={iconName}
        size={props.size}
        color={props.color}
      />
    )
  }

  const handleGetProfileIcon = (props: TabBarIconProps) => {
    let iconName

    if (props.focused) iconName = 'account'
    else iconName = 'account-outline'

    return (
      <MaterialCommunityIcons
        name={iconName}
        size={props.size}
        color={props.color}
      />
    )
  }

  const handleGetMatchesIcon = (props: TabBarIconProps) => {
    let iconName

    if (props.focused) iconName = 'message-text'
    else iconName = 'message-text-outline'

    return (
      <MaterialCommunityIcons
        name={iconName}
        size={props.size - 2}
        color={props.color}
      />
    )
  }

  const handleGetDefaultIcon = (props: TabBarIconProps) => {
    let iconName

    if (props.focused) iconName = 'square-full'
    else iconName = 'square'

    return (
      <FontAwesome5 name={iconName} size={props.size} color={props.color} />
    )
  }

  return (
    <Navigator
      initialRouteName={MAIN_ROUTES.HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: function TabBarIcon({ color, size, focused }) {
          if (route.name === MAIN_ROUTES.HOME) {
            return handleGetHomeIcon({ color, size, focused })
          }

          if (route.name === MAIN_ROUTES.USER_PROFILE) {
            return handleGetProfileIcon({ color, size, focused })
          }

          if (route.name === MAIN_ROUTES.MATCHES) {
            return handleGetMatchesIcon({ color, size, focused })
          }

          return handleGetDefaultIcon({ color, size, focused })
        },
        tabBarLabel: function TabBarLabel({ focused }) {
          let labelTitle

          if (route.name === MAIN_ROUTES.USER_PROFILE) labelTitle = 'Perfil'
          else labelTitle = route.name

          return (
            <Text
              style={{
                fontSize: 12,
                color: focused ? theme.colors.primary.purple : '#4f4f4f',
                marginTop: -6,
                marginBottom: 2,
                fontFamily: focused
                  ? theme.fonts.primary
                  : theme.fonts.input.text,
              }}
            >
              {labelTitle}
            </Text>
          )
        },
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
