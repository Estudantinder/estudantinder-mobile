import React, { useCallback } from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import Contacts from 'main/entities/Contacts'
import {
  StudentAbout,
  StudentDetails,
  StudentPhotos,
  StudentSchool,
} from 'main/entities/Student'
import User, { UserSecrets } from 'main/entities/User'
import CreateUserController from 'main/use-cases/create-user'

export interface ISecrets extends UserSecrets {
  confirm_password: string
}

interface State {
  secrets: ISecrets | undefined
  person: StudentAbout | undefined
  school: StudentSchool | undefined
  contacts: Contacts | undefined
  details: StudentDetails | undefined
  photos: StudentPhotos | undefined
}

interface Actions {
  setSecrets(secrets: ISecrets): void
  setPerson(person: StudentAbout): void
  setSchool(school: StudentSchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: StudentDetails): void
  setPhotos(photos: StudentPhotos): void

  createUser(): Promise<void>
  getUser(): User | null
}

export type SignUpContext = State & Actions

type Ctx = SignUpContext

const Context = createContext<SignUpContext | null>(null)

export function useSignUpContext(): SignUpContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<ISecrets>()

  const [person, setPerson] = useState<StudentAbout>()

  const [school, setSchool] = useState<StudentSchool>()

  const [contacts, setContacts] = useState<Contacts>()

  const [details, setDetails] = useState<StudentDetails>()

  const [photos, setPhotos] = useState<StudentPhotos>()

  const getUser = useCallback<() => User | null>(() => {
    if (!school || !secrets || !person || !contacts || !details || !photos) {
      return null
    }

    return new User({
      ...secrets,
      ...person,
      ...school,
      contacts,
      ...details,
      ...photos,
    })
  }, [school, secrets, person, contacts, details, photos])

  const createUser = useCallback<() => Promise<void>>(async () => {
    const user = getUser()

    if (!user) throw new Error('USER NOT CREATED')

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
      photos,
      setPhotos,
    }),
    [secrets, person, school, contacts, details, createUser, getUser, photos]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
