import React from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

interface ISecrets {
  email: string
  password: string
}

interface IPerson {
  name: string
  birth_date: string
  gender: string
}

export interface SignUpContext {
  // State

  secrets: ISecrets
  person: IPerson

  // Actions

  setSecrets(secrets: ISecrets): void
  setPerson(person: IPerson): void
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

  const [person, setPerson] = useState<Ctx['person']>({
    birth_date: '',
    gender: '',
    name: '',
  })

  const value = useMemo<Ctx>(
    () => ({
      secrets,
      setSecrets,
      person,
      setPerson,
    }),
    [person, secrets]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
