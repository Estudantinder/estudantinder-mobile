/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'

export type ThemeNames = 'light' | 'dark'

export interface Fonts {
  titles: {
    primary: string
    secondary: string
  }
  subtitle: string
  primary: string
  button: string
  input: {
    label: string
    text: string
  }
}

export interface Theme {
  name: ThemeNames

  green: string
  purple: string
  dark_purple: string
  light_purple: string
  background: string
  input: {
    background: string
    active_border: string
    active_text: string
    placeholder: string
    label: string
    error: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
