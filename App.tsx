import React from 'react'
import { LogBox } from 'react-native'

import {
  Archivo_400Regular,
  Archivo_600SemiBold,
} from '@expo-google-fonts/archivo'
import {
  NotoSans_400Regular,
  NotoSans_700Bold,
} from '@expo-google-fonts/noto-sans'
import {
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins'
import { AppLoading } from 'expo'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components'

import Router from 'packages/router'
import theme from 'packages/styles/theme'

LogBox.ignoreLogs(['nested'])

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_600SemiBold,
    Poppins_500Medium,
    Poppins_600SemiBold,
    NotoSans_400Regular,
    NotoSans_700Bold,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Router />

      <StatusBar style="light" backgroundColor="rgba(0,0,0, .4)" />
    </ThemeProvider>
  )
}
