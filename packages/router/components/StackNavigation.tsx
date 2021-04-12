import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { useToggleThemeContext } from 'packages/styles/context'

const { Navigator } = createStackNavigator()

export interface StackNavigationProps {
  initialPage?: string
}

const StackNavigation: React.FC<StackNavigationProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <NavigationContainer theme={theme.name === 'dark' ? DarkTheme : undefined}>
      <Navigator
        initialRouteName={props.initialPage}
        screenOptions={{ headerShown: false }}
      >
        {props.children}
      </Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
