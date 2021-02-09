import React from 'react'
import { LogBox } from 'react-native'

import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import Router from 'packages/router'
import theme from 'packages/styles/theme'

LogBox.ignoreLogs(['nested'])

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />

      <StatusBar style="light" backgroundColor="rgba(0,0,0, .4)" />
    </ThemeProvider>
  )
}
