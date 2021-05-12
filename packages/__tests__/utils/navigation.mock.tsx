import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { ToggleThemeContextProvider } from 'packages/styles/context'
const { Navigator, Screen } = createStackNavigator()

export { Screen }

const MockNavigator: React.FC = ({ children }) => {
  return (
    <ToggleThemeContextProvider>
      <NavigationContainer>
        <Navigator>{children}</Navigator>
      </NavigationContainer>
    </ToggleThemeContextProvider>
  )
}

export default MockNavigator
