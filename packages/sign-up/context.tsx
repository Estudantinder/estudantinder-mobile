import React, { useCallback } from 'react'
import { createContext, useMemo, useState, FC } from 'react'

import { ContextUserSecrets } from 'packages/edit-student-info/pages/Secrets'
import Contacts from 'packages/entities/Contacts'
import {
  StudentAbout,
  StudentDetails,
  StudentPhotos,
  StudentSchool,
} from 'packages/entities/Student'
import User from 'packages/entities/User'
import useSafeContext from 'packages/hooks/useSafeContext'

import CreateUserUseCase from './use-cases/create-user'

interface State {
  secrets: ContextUserSecrets | undefined
  about: StudentAbout | undefined
  school: StudentSchool | undefined
  contacts: Contacts | undefined
  details: StudentDetails | undefined
  photos: StudentPhotos | undefined
}

interface Actions {
  setSecrets(secrets: ContextUserSecrets): void
  setAbout(about: StudentAbout): void
  setSchool(school: StudentSchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: StudentDetails): void
  setPhotos(photos: StudentPhotos): void

  getUser(): User | null
  createUser(): Promise<void>
}

export type SignUpContext = State & Actions

type Ctx = SignUpContext

const Context = createContext<SignUpContext | null>(null)

export function useSignUpContext(): SignUpContext {
  return useSafeContext(Context) as SignUpContext
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<ContextUserSecrets>()

  const [about, setAbout] = useState<StudentAbout>()

  const [school, setSchool] = useState<StudentSchool>()

  const [contacts, setContacts] = useState<Contacts>()

  const [details, setDetails] = useState<StudentDetails>()

  const [photos, setPhotos] = useState<StudentPhotos>()

  const getUser = useCallback<() => User | null>(() => {
    if (!school || !secrets || !about || !contacts || !details || !photos) {
      return null
    }

    return new User({
      ...secrets,
      ...about,
      ...school,
      contacts,
      ...details,
      ...photos,
    })
  }, [school, secrets, about, contacts, details, photos])

  const createUser = useCallback<() => Promise<void>>(async () => {
    const user = getUser()

    if (!user) throw new Error('USER UNDEFINED')

    await CreateUserUseCase(user)
  }, [getUser])

  const value = useMemo<Ctx>(
    () => ({
      secrets,
      setSecrets,
      about,
      setAbout,
      school,
      setSchool,
      contacts,
      setContacts,
      details,
      setDetails,
      photos,
      setPhotos,
      getUser,
      createUser,
    }),
    [secrets, about, school, contacts, details, photos, getUser, createUser]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
