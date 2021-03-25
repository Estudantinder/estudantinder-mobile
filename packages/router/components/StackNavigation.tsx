import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { Navigator } = createStackNavigator()

export interface StackNavigationProps {
  initialPage?: string
}

const StackNavigation: React.FC<StackNavigationProps> = (props) => {
  return (
    <NavigationContainer>
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
