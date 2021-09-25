import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View } from 'react-native'

import { useToggleThemeContext } from 'packages/styles/context'

const { Navigator } = createNativeStackNavigator()

export interface StackNavigationProps {
  initialPage?: string
}

const StackNavigation: React.FC<StackNavigationProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <NavigationContainer
      theme={theme.name === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* Remove white flash when navigating between pages */}
      <View
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          backgroundColor: theme.background.default,
        }}
      />

      <Navigator
        initialRouteName={props.initialPage}
        screenOptions={{
          headerShown: false,
          animation: 'fade',
        }}
      >
        {props.children}
      </Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
