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

import { AuthContextProvider } from 'packages/auth/context'
import Router from 'packages/router'
import {
  ToggleThemeContextProvider,
  useToggleThemeContext,
} from 'packages/styles/context'

LogBox.ignoreLogs(['nested'])

const App: React.FC = () => {
  const { theme } = useToggleThemeContext()

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
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>

      <StatusBar style="light" backgroundColor="rgba(0,0,0, .4)" />
    </ThemeProvider>
  )
}

const WithToggleThemeProvider: React.FC = () => {
  return (
    <ToggleThemeContextProvider>
      <App />
    </ToggleThemeContextProvider>
  )
}

export default WithToggleThemeProvider
