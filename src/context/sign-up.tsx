import React from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

interface ISecrets {
  email: string
  password: string
}

export interface SignUpContext {
  // State

  secrets: ISecrets

  // Actions

  setSecrets(secrets: ISecrets): void
}

type Ctx = SignUpContext

const Context = createContext<SignUpContext | null>(null)

export function useSignUpContext(): SignUpContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<Ctx['secrets']>({
    email: '',
    password: '',
  })

  const value = useMemo<Ctx>(
    () => ({
      secrets,
      setSecrets,
    }),
    [secrets, setSecrets]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
