import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import Student from 'main/entities/Student'
import getStudents from 'main/use-cases/get-students'

interface State {
  students: Student[]
}

interface Actions {
  reloadStudents(): Promise<void>
  likeStudent(id: string): Promise<void>
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

  const likeStudent = useCallback(async () => {
    const newStudents = students

    newStudents.shift()

    setStudents([...newStudents])
  }, [students])

  const value = useMemo<StudentsContext>(
    () => ({ students, reloadStudents, likeStudent }),
    [likeStudent, reloadStudents, students]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
