import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
const { Navigator, Screen } = createStackNavigator()

export { Screen }

const MockNavigator: React.FC = ({ children }) => {
  return (
    <NavigationContainer>
      <Navigator>{children}</Navigator>
    </NavigationContainer>
  )
}

export default MockNavigator
