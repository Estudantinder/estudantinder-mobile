import User from 'main/entities/User'
import { ControllerError } from 'main/utils/interfaces'

export interface CreateUserApiResponse {
  id: string
}

export interface CreateUserReturn {
  id: string
  error?: ControllerError
}

type Modify<T, R> = Omit<T, keyof R> & R

export type CreateUserData = Modify<
  Omit<User, 'subjects' | 'course'>,
  {
    school_year: number
    shift: number
    course_id: number
    subjects_id: Array<number>
    photos: Array<string>
  }
>
