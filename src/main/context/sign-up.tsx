import React, { useCallback } from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import Contacts from 'main/entities/Contacts'
import User from 'main/entities/User'

export interface ISecrets {
  email: string
  password: string
  confirm_password: string
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

  getUser(): User
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
    confirm_password: '',
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
    subjects: [],
  })

  const getUser = useCallback<Ctx['getUser']>(() => {
    return new User({
      ...secrets,
      ...school,
      ...person,
      ...details,
      contacts: {
        facebook: contacts.facebook === '' ? undefined : contacts.facebook,
        whatsapp: contacts.whatsapp === '' ? undefined : contacts.whatsapp,
        instagram: contacts.instagram === '' ? undefined : contacts.instagram,
        twitter: contacts.twitter === '' ? undefined : contacts.twitter,
      },
    })
  }, [contacts, details, person, secrets, school])

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
      getUser,
    }),
    [secrets, person, school, contacts, details, getUser]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
