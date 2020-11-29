import React from 'react'

import { ThemeProvider } from 'styled-components'

import Router from './src/routes'
import theme from './src/styles/theme'
import AppProvider from 'src/context'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ThemeProvider>
  )
}
