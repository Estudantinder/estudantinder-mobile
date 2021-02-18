import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import env from 'env'

import Student from 'packages/entities/Student'

import GetStudentsUseCase from './use-cases/get-students'

interface State {
  students: Student[]
}

interface Actions {
  resetStudents(): Promise<void>
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

  const resetStudents = useCallback(async () => {
    const newStudents = await GetStudentsUseCase()

    setStudents(newStudents)
  }, [])

  const value = useMemo<MainContext>(() => {
    return {
      students,
      resetStudents,
    }
  }, [resetStudents, students])

  return <Context.Provider value={value}>{children}</Context.Provider>
}
