import React from 'react'

import { Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'main/context'

import Router from 'views/routes'
import theme from 'views/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_500Medium, Poppins_700Bold })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ThemeProvider>
  )
}
