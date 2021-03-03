import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import env from 'env'

import { ContextUserSecrets } from 'packages/edit-student-info/pages/Secrets'
import Contacts from 'packages/entities/Contacts'
import {
  StudentAbout,
  StudentSchool,
  StudentDetails,
  StudentPhotos,
} from 'packages/entities/Student'
import User from 'packages/entities/User'
import { useMainContext } from 'packages/main/context'

import { EditPhotosUseCasePhotos } from './use-cases/edit-photos'
import EditAuthUserUseCase from './use-cases/edit-user'

export type EditAuthUserContextSecrets = {
  email: string
} & Partial<ContextUserSecrets>

type EditAuthUserContextPhotos = {
  newPhotos?: EditPhotosUseCasePhotos
} & StudentPhotos

interface State {
  secrets: EditAuthUserContextSecrets
  about: StudentAbout
  school: StudentSchool
  contacts: Contacts
  details: StudentDetails
  photos: EditAuthUserContextPhotos

  initialUser: User
}

interface Actions {
  setSecrets(secrets: EditAuthUserContextSecrets): void
  setAbout(about: StudentAbout): void
  setSchool(school: StudentSchool): void
  setContacts(contacts: Contacts): void
  setDetails(details: StudentDetails): void
  setPhotos(photos: EditAuthUserContextPhotos): void

  getUser(): User | null
  editUser(): Promise<void>
}

export type EditAuthUserContext = State & Actions

const Context = createContext<EditAuthUserContext | null>(null)

export function useEditAuthUserContext(): EditAuthUserContext {
  const value = useContext(Context)

  if (!env().null_context && value === null) {
    throw new Error('CONTEXT NOT PROVIDED')
  }

  return value || ({} as EditAuthUserContext)
}

export const EditAuthUserContextProvider: React.FC = ({ children }) => {
  const { profile } = useMainContext()

  if (!profile) throw new Error('PROFILE NOT FOUND')

  const [secrets, setSecrets] = useState<EditAuthUserContextSecrets>({
    email: profile.email,
  })

  const [about, setAbout] = useState<StudentAbout>({
    birth_date: profile.birth_date,
    name: profile.name,
    gender: profile.gender,
  })

  const [school, setSchool] = useState<StudentSchool>({
    classroom: profile.classroom,
    course: profile.course,
    school: profile.school,
    school_year: profile.school_year,
    shift: profile.shift,
  })

  const [contacts, setContacts] = useState<Contacts>(profile.contacts)

  const [details, setDetails] = useState<StudentDetails>({
    bio: profile.bio,
    subjects: profile.subjects,
  })

  const [photos, setPhotos] = useState<EditAuthUserContextPhotos>({
    photos: profile.photos,
  })

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
    } as never)
  }, [school, secrets, about, contacts, details, photos])

  const editUser = useCallback<() => Promise<void>>(async () => {
    const user = getUser()

    if (!user) throw new Error('USER UNDEFINED')

    await EditAuthUserUseCase(user)
  }, [getUser])

  const value = useMemo<EditAuthUserContext>(
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
      editUser,
      initialUser: profile,
    }),
    [
      secrets,
      about,
      school,
      contacts,
      details,
      photos,
      getUser,
      editUser,
      profile,
    ]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const EditAuthUserContextConsumer = Context.Consumer
