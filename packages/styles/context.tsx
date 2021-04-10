import React, { createContext, useCallback, useMemo, useState } from 'react'
import { useColorScheme } from 'react-native-appearance'

import useSafeContext from 'packages/hooks/useSafeContext'

import { Theme } from './styled'
import { lightTheme, darkTheme } from './theme'

interface State {
  theme: Theme
}

interface Actions {
  toggle(): void
}

export type ToggleThemeContext = State & Actions

const Context = createContext<ToggleThemeContext | null>(null)

export function useToggleThemeContext(): ToggleThemeContext {
  return useSafeContext(Context) as ToggleThemeContext
}

export const ToggleThemeContextProvider: React.FC = ({ children }) => {
  const scheme = useColorScheme()

  const [theme, setTheme] = useState<Theme>(
    scheme === 'dark' ? darkTheme : lightTheme
  )

  const toggle = useCallback(() => {
    if (theme.name === 'light') return setTheme(darkTheme)

    setTheme(lightTheme)
  }, [theme.name])

  const value = useMemo<ToggleThemeContext>(
    () => ({
      toggle,
      theme,
    }),
    [theme, toggle]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
