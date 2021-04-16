import React, { createContext, useCallback, useMemo, useState } from 'react'

import Student from 'packages/entities/Student'
import useSafeContext from 'packages/hooks/useSafeContext'

import GetStudentsUseCase from '../use-cases/get-students'
import LikeStudentUseCase from '../use-cases/like-student'

interface State {
  students: Student[]
  isStudentsDone: boolean
}

interface Actions {
  likeStudent(): Promise<void>
  dislikeStudent(): Promise<void>
  reloadAllStudents(): Promise<void>
}

export type MainHomeContext = State & Actions

const Context = createContext<MainHomeContext | null>(null)

export function useMainHomeContext(): MainHomeContext {
  return useSafeContext(Context) as MainHomeContext
}

export const MainHomeContextProvider: React.FC = ({ children }) => {
  const [students, setStudents] = useState<Student[]>([])
  const [actualIndex, setActualIndex] = useState(0)
  const [isStudentsDone, setIsStudentsDone] = useState(true)

  const reloadAllStudents = useCallback(async () => {
    const apiStudents = await GetStudentsUseCase()

    if (!apiStudents.length) setIsStudentsDone(true)
    else setIsStudentsDone(false)

    setStudents(apiStudents)
    setActualIndex(0)
  }, [])

  const afterInteraction = useCallback(() => {
    if (actualIndex + 1 >= students.length) setIsStudentsDone(true)

    return setActualIndex(actualIndex + 1)
  }, [actualIndex, students.length])

  const likeStudent = useCallback(async () => {
    LikeStudentUseCase(students[actualIndex].id)
    afterInteraction()
  }, [actualIndex, afterInteraction, students])

  const dislikeStudent = useCallback(async () => {
    LikeStudentUseCase(students[actualIndex].id)
    afterInteraction()
  }, [actualIndex, afterInteraction, students])

  const value = useMemo<MainHomeContext>(
    () => ({
      students,
      dislikeStudent,
      likeStudent,
      reloadAllStudents,
      isStudentsDone,
    }),
    [dislikeStudent, isStudentsDone, likeStudent, reloadAllStudents, students]
  )

  return <Context.Provider value={value}>{children}</Context.Provider>
}
