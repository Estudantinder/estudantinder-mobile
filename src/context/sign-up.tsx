import React from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import Contacts from 'src/entities/Contacts'

export interface ISecrets {
  email: string
  password: string
}

export interface IPerson {
  name: string
  birth_date: string
  gender: string
}

export interface ISchool {
  school: string
  course: string
  grade: string
  period: string
  classroom: string
}

export interface IDetails {
  description: string
  subjects: Array<string>
}

export interface SignUpContext {
  // State

  secrets: ISecrets
  person: IPerson
  school: ISchool
  contacts: Contacts
  details: IDetails

  // Actions

  setSecrets(secrets: ISecrets): void
  setPerson(person: IPerson): void
  setSchool(school: ISchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: IDetails): void
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

  const [school, setSchool] = useState<Ctx['school']>({
    classroom: '',
    course: '',
    grade: '',
    period: '',
    school: '',
  })

  const [contacts, setContacts] = useState<Ctx['contacts']>({
    facebook: '',
    instagram: '',
    twitter: '',
    whatsapp: '',
  })

  const [details, setDetails] = useState<Ctx['details']>({
    description: '',
    subjects: ['', '', ''],
  })

  const value = useMemo<Ctx>(
    () => ({
      secrets,
      setSecrets,
      person,
      setPerson,
      school,
      setSchool,
      contacts,
      setContacts,
      details,
      setDetails,
    }),
    [secrets, person, school, contacts, details]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
