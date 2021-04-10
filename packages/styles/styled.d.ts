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

  base: {
    purple: string
    secondary_purple: string
    green: string
  }
  text: {
    default: string
    button: string
  }
  icon: {
    default: string
  }
  input: {
    background: string
    active_text: string
    placeholder: string
    error: string
  }
  background: {
    default: string
    light_purple: string
  }
  pages: {
    contacts: {
      inputs: {
        facebook: string
        instagram: string
        whatsapp: string
        twitter: string
      }
    }
  }
  components: {
    divider: string
    photos: {
      pagination: {
        inactive_dot: string
        active_dot: string
      }
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
