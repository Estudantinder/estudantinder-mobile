import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import env from 'env'

import Match from 'packages/entities/Match'
import Student from 'packages/entities/Student'
import User from 'packages/entities/User'

import DeleteMatchUseCase from './use-cases/delete-match'
import DislikeStudentUseCase from './use-cases/dislike-student'
import GetMatchesUseCase from './use-cases/get-matches'
import GetStudentsUseCase from './use-cases/get-students'
import GetUserProfileUseCase from './use-cases/get-user-profile'
import LikeStudentUseCase from './use-cases/like-student'

interface State {
  students: Student[]
  matches: Match[]
  profile: User | null
}

interface Actions {
  addMoreStudents(): Promise<void>
  likeStudent(): Promise<void>
  dislikeStudent(): Promise<void>
  reloadAllStudents(): Promise<void>

  getMatches(): Promise<void>
  deleteMatch(id: string): Promise<void>

  getProfile(): Promise<void>
  setProfile(user: User): void
}

export type MainContext = State & Actions

const Context = createContext<MainContext | null>(null)

export function useMainContext(): MainContext {
  const value = useContext(Context)

  if (!env().null_context && value === null) {
    throw new Error('CONTEXT NOT PROVIDED')
  }

  return value || ({} as MainContext)
}

export const MainContextProvider: React.FC = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([])
  const [matches, setMatches] = useState<Match[]>([])
  const [profile, setProfile] = useState<User | null>(null)

  const reloadAllStudents = useCallback(async () => {
    const apiStudents = await GetStudentsUseCase()

    setStudents(apiStudents)
  }, [])

  const addMoreStudents = useCallback(
    async (removeStudentsIds?: string[]) => {
      const apiStudents = await GetStudentsUseCase()

      const notRemovedStudents = students.filter(
        (value) => !removeStudentsIds?.includes(value.id)
      )

      const studentsIds = notRemovedStudents.map((value) => value.id)

      const newStudents = apiStudents.filter(
        (student) =>
          !studentsIds.includes(student.id) &&
          !removeStudentsIds?.includes(student.id)
      )

      setStudents([...notRemovedStudents, ...newStudents])
    },
    [students]
  )

  const likeStudent = useCallback(async () => {
    await LikeStudentUseCase(students[0].id)

    if (students.length < 4) addMoreStudents([students[0].id])

    setStudents([...students.slice(1)])
  }, [addMoreStudents, students])

  const dislikeStudent = useCallback(async () => {
    await DislikeStudentUseCase(students[0].id)

    if (students.length < 4) addMoreStudents([students[0].id])

    setStudents([...students.slice(1)])
  }, [addMoreStudents, students])

  const getMatches = useCallback(async () => {
    const newMatches = await GetMatchesUseCase()

    setMatches(newMatches)
  }, [])

  const deleteMatch = useCallback(
    async (id: string) => {
      await DeleteMatchUseCase(id)

      const newMatches = matches.filter((value) => value.match_id !== id)

      setMatches([...newMatches])
    },
    [matches]
  )

  const getProfile = useCallback(async () => {
    const newProfile = await GetUserProfileUseCase()

    setProfile(newProfile)
  }, [])

  const value = useMemo<MainContext>(() => {
    return {
      students,
      addMoreStudents,
      likeStudent,
      dislikeStudent,
      reloadAllStudents,
      getMatches,
      deleteMatch,
      getProfile,
      matches,
      profile,
      setProfile,
    }
  }, [
    students,
    addMoreStudents,
    likeStudent,
    dislikeStudent,
    reloadAllStudents,
    getMatches,
    deleteMatch,
    getProfile,
    matches,
    profile,
  ])

  return <Context.Provider value={value}>{children}</Context.Provider>
}
