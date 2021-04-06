import React, { createContext, useCallback, useMemo } from 'react'

import { ContextUserSecrets } from 'packages/edit-student-info/pages/Secrets'
import Contacts from 'packages/entities/Contacts'
import {
  StudentAbout,
  StudentSchool,
  StudentDetails,
  StudentPhotos,
} from 'packages/entities/Student'
import User from 'packages/entities/User'
import useSafeContext from 'packages/hooks/useSafeContext'
import { useMainContext } from 'packages/main/context'

import EditAuthUserUseCase from './use-cases/edit-user'

export type EditAuthUserContextSecrets = {
  email: string
} & Partial<ContextUserSecrets>

interface State {
  secrets: EditAuthUserContextSecrets
  about: StudentAbout
  school: StudentSchool
  contacts: Contacts
  details: StudentDetails
  photos: StudentPhotos
}

interface Actions {
  updateUser(newUserInfo: Partial<User>): Promise<void>
}

export type EditAuthUserContext = State & Actions

const Context = createContext<EditAuthUserContext | null>(null)

export function useEditAuthUserContext(): EditAuthUserContext {
  return useSafeContext(Context) as EditAuthUserContext
}

export const EditAuthUserContextProvider: React.FC = ({ children }) => {
  const { profile, setProfile } = useMainContext()

  if (!profile) throw new Error('PROFILE NOT FOUND')

  const secrets = useMemo<EditAuthUserContextSecrets>(
    () => ({
      email: profile.email,
    }),
    [profile]
  )

  const about = useMemo<StudentAbout>(
    () => ({
      birth_date: profile.birth_date,
      name: profile.name,
      gender: profile.gender,
    }),
    [profile]
  )

  const school = useMemo<StudentSchool>(
    () => ({
      classroom: profile.classroom,
      course: profile.course,
      school: profile.school,
      school_year: profile.school_year,
      shift: profile.shift,
    }),
    [profile]
  )

  const contacts = useMemo<Contacts>(() => profile.contacts, [profile.contacts])

  const details = useMemo<StudentDetails>(
    () => ({
      bio: profile.bio,
      subjects: profile.subjects,
    }),
    [profile]
  )

  const photos = useMemo<StudentPhotos>(
    () => ({
      photos: profile.photos,
    }),
    [profile]
  )

  const updateUser = useCallback(
    async (info: Partial<User>) => {
      await EditAuthUserUseCase(info)

      setProfile({ ...profile, ...info })
    },
    [profile, setProfile]
  )

  const value = useMemo<EditAuthUserContext>(
    () => ({
      secrets,
      about,
      school,
      contacts,
      details,
      photos,
      updateUser,
    }),
    [about, contacts, details, photos, school, secrets, updateUser]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const EditAuthUserContextConsumer = Context.Consumer
