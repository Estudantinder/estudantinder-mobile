import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

const { Navigator } = createStackNavigator()

const StackNavigation: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>{children}</Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation
