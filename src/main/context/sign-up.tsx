import React, { useCallback } from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import Contacts from 'main/entities/Contacts'
import Course from 'main/entities/Course'
import School from 'main/entities/School'
import {
  StudentAbout,
  StudentDetails,
  StudentSchool,
} from 'main/entities/Student'
import User, { UserSecrets } from 'main/entities/User'
import CreateUserController from 'main/use-cases/create-user'

import { SHIFTS } from 'shared/constants'

export interface ISecrets extends UserSecrets {
  confirm_password: string
}

interface State {
  secrets: ISecrets
  person: StudentAbout
  school: StudentSchool
  contacts: Contacts
  details: StudentDetails
}

interface Actions {
  setSecrets(secrets: ISecrets): void
  setPerson(person: StudentAbout): void
  setSchool(school: StudentSchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: StudentDetails): void

  createUser(): Promise<void>
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
    school: (undefined as unknown) as School,
    course: (undefined as unknown) as Course,
    school_year: 0,
    shift: (undefined as unknown) as SHIFTS,
  },
}

export function useSignUpContext(): SignUpContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<ISecrets>(INITIAL_STATE.secrets)

  const [person, setPerson] = useState<StudentAbout>(INITIAL_STATE.person)

  const [school, setSchool] = useState<StudentSchool>(INITIAL_STATE.school)

  const [contacts, setContacts] = useState<Contacts>(INITIAL_STATE.contacts)

  const [details, setDetails] = useState<StudentDetails>(INITIAL_STATE.details)

  const getUser = useCallback<() => User>(() => {
    return new User({ ...secrets, ...person, ...school, contacts, ...details })
  }, [contacts, details, person, secrets, school])

  const createUser = useCallback<() => Promise<void>>(async () => {
    const user = getUser()

    const { error } = await CreateUserController(user)

    if (error) throw error
  }, [getUser])

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
      createUser,
      getUser,
    }),
    [secrets, person, school, contacts, details, createUser, getUser]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
