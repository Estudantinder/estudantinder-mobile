import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Student from 'main/entities/Student'
import dislikeTargetStudent from 'main/use-cases/dislike-target-student'
import editFilters from 'main/use-cases/edit-filters'
import { FiltersData } from 'main/use-cases/edit-filters/FiltersDataAdapter'
import getStudents from 'main/use-cases/get-students'
import likeTargetStudent from 'main/use-cases/like-target-student'

interface State {
  students: Student[]
}

interface Actions {
  reloadStudents(): Promise<void>
  likeStudent(id: string): Promise<void>
  dislikeStudent(id: string): Promise<void>
  updateFilters(filters: FiltersData): Promise<void>
}

export type StudentsContext = State & Actions

const Context = createContext<StudentsContext | null>(null)

const INITIAL_STATE: State = {
  students: [],
}

export function useStudentsContext(): StudentsContext {
  const value = useContext(Context)

  if (value === null) throw new Error('No context provided')

  return value
}

export const StudentsContextProvider: React.FC = ({ children }) => {
  const [students, setStudents] = useState(INITIAL_STATE.students)

  const reloadStudents = useCallback(async () => {
    const { students: newStudents, error } = await getStudents()

    if (error) throw error

    setStudents(newStudents)
  }, [])

  const likeStudent = useCallback(
    async (id: string) => {
      await likeTargetStudent(id)

      const newStudents = students

      newStudents.shift()

      setStudents([...newStudents])
    },
    [students]
  )

  const dislikeStudent = useCallback(
    async (id: string) => {
      await dislikeTargetStudent(id)

      const newStudents = students

      newStudents.shift()

      setStudents([...newStudents])
    },
    [students]
  )

  const updateFilters = useCallback(
    async (data: FiltersData) => {
      await editFilters(data)

      reloadStudents()
    },
    [reloadStudents]
  )

  const value = useMemo<StudentsContext>(
    () => ({
      students,
      reloadStudents,
      likeStudent,
      dislikeStudent,
      updateFilters,
    }),
    [dislikeStudent, likeStudent, reloadStudents, students, updateFilters]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
