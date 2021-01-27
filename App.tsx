import React from 'react'

import {
  Archivo_600SemiBold,
  Archivo_500Medium,
} from '@expo-google-fonts/archivo'
import {
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { ThemeProvider } from 'styled-components'

import AppProvider from 'main/context'

import Router from 'views/routes'
import theme from 'views/styles/theme'

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    Archivo_600SemiBold,
    Archivo_500Medium,
  })

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
