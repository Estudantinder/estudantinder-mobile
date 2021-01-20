import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'

import { Feather } from '@expo/vector-icons'

import Home from 'views/pages/Home'
import theme from 'views/styles/theme'
const { Navigator, Screen } = createBottomTabNavigator()

export default function MainTabNavigation() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: function TabBarIcon({ color, size }) {
          let iconName

          if (route.name === 'Home') {
            iconName = 'home'
          } else {
            iconName = 'square'
          }

          return <Feather name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: theme.colors.primary.purple,
        inactiveTintColor: theme.colors.background.light_purple,
        labelStyle: {
          fontSize: 12,
          color: '#4f4f4f',
          marginTop: -6,
          marginBottom: 2,
        },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
