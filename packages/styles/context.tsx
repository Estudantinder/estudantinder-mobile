import React, {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { useColorScheme } from 'react-native-appearance'

import useSafeContext from 'packages/hooks/useSafeContext'

import { Theme } from './styled'
import { lightTheme, darkTheme } from './theme'
import GetUserThemeUseCase from './use-cases/get-user-theme'
import SetUserThemeUseCase from './use-cases/set-user-theme'

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

  useEffect(() => {
    const getUserTheme = async () => {
      const storageTheme = await GetUserThemeUseCase()

      if (storageTheme) {
        return setTheme(storageTheme === 'dark' ? darkTheme : lightTheme)
      }

      await SetUserThemeUseCase(scheme === 'dark' ? 'dark' : 'light')

      setTheme(scheme === 'dark' ? darkTheme : lightTheme)
    }

    getUserTheme()
  }, [scheme])

  const [theme, setTheme] = useState<Theme>(
    scheme === 'dark' ? darkTheme : lightTheme
  )

  const toggle = useCallback(() => {
    if (theme.name === 'light') {
      SetUserThemeUseCase('dark')
      return setTheme(darkTheme)
    }

    SetUserThemeUseCase('light')
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
