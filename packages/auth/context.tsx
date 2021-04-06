import React, { createContext, useCallback, useMemo, useState } from 'react'

import useSafeContext from 'packages/hooks/useSafeContext'

import CreateAuthTokenUseCase, {
  CreateAuthTokenData,
} from './use-cases/create-token'
import DeleteAuthTokenUseCase from './use-cases/delete-token'
import RestoreAuthTokenUseCase from './use-cases/restore-token'

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
  return useSafeContext(Context) as AuthContext
}

export const AuthContextProvider: React.FC = ({ children }) => {
  const [token, setToken] = useState(INITIAL_STATE.token)
  const [isLoading, setIsLoading] = useState(INITIAL_STATE.isLoading)

  const restoreToken = useCallback(async () => {
    const token = await RestoreAuthTokenUseCase()

    setToken(token)

    return setIsLoading(false)
  }, [])

  const signIn = useCallback(async (data: CreateAuthTokenData) => {
    const apiToken = await CreateAuthTokenUseCase(data)

    setToken(apiToken)
  }, [])

  const signOut = useCallback(async () => {
    await DeleteAuthTokenUseCase()

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
