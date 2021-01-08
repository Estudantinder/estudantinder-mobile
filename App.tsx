import React from 'react'

import { ThemeProvider } from 'styled-components'

import AppProvider from 'main/context'

import Router from 'views/routes'
import theme from 'views/styles/theme'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Router />
      </AppProvider>
    </ThemeProvider>
  )
}
