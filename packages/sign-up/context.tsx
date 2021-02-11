import React, { useEffect } from 'react'
import { createContext, useContext, useMemo, useState, FC } from 'react'

import env from 'env'

import Contacts from 'packages/entities/Contacts'
import {
  StudentAbout,
  StudentDetails,
  StudentPhotos,
  StudentSchool,
} from 'packages/entities/Student'
import User, { UserSecrets } from 'packages/entities/User'

export interface ContextUserSecrets extends UserSecrets {
  confirm_password: string
}

interface State {
  user?: User
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
}

export type SignUpContext = State & Actions

type Ctx = SignUpContext

const Context = createContext<SignUpContext | null>(null)

export function useSignUpContext(): SignUpContext {
  const value = useContext(Context)

  if (!env().null_context && value === null) {
    throw new Error('CONTEXT NOT PROVIDED')
  }

  return value || ({} as SignUpContext)
}

export const SignUpContextProvider: FC = ({ children }) => {
  const [secrets, setSecrets] = useState<ContextUserSecrets>()

  const [about, setAbout] = useState<StudentAbout>()

  const [school, setSchool] = useState<StudentSchool>()

  const [contacts, setContacts] = useState<Contacts>()

  const [details, setDetails] = useState<StudentDetails>()

  const [photos, setPhotos] = useState<StudentPhotos>()

  const [user, setUser] = useState<User>()

  useEffect(() => {
    if (!secrets || !about || !school || !contacts || !details || !photos)
      return

    const newUser = new User({
      ...secrets,
      ...school,
      contacts,
      ...details,
      ...photos,
      ...about,
    })

    setUser(newUser)
  }, [contacts, details, about, photos, school, secrets])

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
      user,
      setPhotos,
    }),
    [secrets, about, school, contacts, details, photos, user]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const SignUpContextConsumer = Context.Consumer
