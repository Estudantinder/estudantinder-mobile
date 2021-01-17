import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import createAuthToken from 'main/use-cases/create-auth-token'
import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'
import deleteAuthToken from 'main/use-cases/delete-auth-token'
import restoreAuthToken from 'main/use-cases/restore-auth-token'

interface State {
  isLoading: boolean
  token: string | null
}

interface Actions {
  restoreToken(): Promise<void>
  signIn(data: CreateAuthTokenData): Promise<void>
  signOut(): Promise<void>
}

export type AuthContext = State & Actions

const Context = createContext<AuthContext | null>(null)

const INITIAL_STATE: State = {
  isLoading: true,
  token: null,
}

export function useAuthContext(): AuthContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(INITIAL_STATE.token)
  const [isLoading, setIsLoading] = useState(INITIAL_STATE.isLoading)

  const restoreToken = useCallback(async () => {
    const { token } = await restoreAuthToken()

    setToken(token)

    return setIsLoading(false)
  }, [])

  const signIn = useCallback(async (data: CreateAuthTokenData) => {
    const { token: apiToken, error } = await createAuthToken(data)

    if (error) throw error

    setToken(apiToken)
  }, [])

  const signOut = useCallback(async () => {
    await deleteAuthToken()

    setToken(null)
  }, [])

  const value = useMemo<AuthContext>(
    () => ({
      isLoading,
      token,
      restoreToken,
      signIn,
      signOut,
    }),
    [isLoading, restoreToken, signIn, signOut, token]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
