import React, { useCallback } from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import Contacts from 'main/entities/Contacts'
import User, {
  UserAbout,
  UserDetails,
  UserSchool,
  UserSecrets,
} from 'main/entities/User'

import { SHIFTS } from 'shared/Constants'

export interface ISecrets extends UserSecrets {
  confirm_password: string
}

interface State {
  secrets: ISecrets
  person: UserAbout
  school: UserSchool
  contacts: Contacts
  details: UserDetails
}

interface Actions {
  setSecrets(secrets: ISecrets): void
  setPerson(person: UserAbout): void
  setSchool(school: UserSchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: UserDetails): void

  getUser(): User
}

export type SignUpContext = State & Actions

type Ctx = SignUpContext

const Context = createContext<SignUpContext | null>(null)

const INITIAL_STATE: State = {
  secrets: { confirm_password: '', email: '', password: '' },
  contacts: { facebook: '', instagram: '', twitter: '', whatsapp: '' },
  details: { bio: '', subjects: [] },
  person: { birth_date: '', name: '' },
  school: {
    classroom: '',
    course_id: '',
    school_year: 0,
    shift: SHIFTS.MORNING,
  },
}

export function useSignUpContext(): SignUpContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<ISecrets>(INITIAL_STATE.secrets)

  const [person, setPerson] = useState<UserAbout>(INITIAL_STATE.person)

  const [school, setSchool] = useState<UserSchool>(INITIAL_STATE.school)

  const [contacts, setContacts] = useState<Contacts>(INITIAL_STATE.contacts)

  const [details, setDetails] = useState<UserDetails>(INITIAL_STATE.details)

  const getUser = useCallback<() => User>(() => {
    return new User({ ...secrets, ...person, ...school, contacts, ...details })
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
