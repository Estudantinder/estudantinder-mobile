import User from 'main/entities/User'

import { ControllerError } from 'shared/interfaces'

export interface CreateUserApiResponse {
  id: string
}

export interface CreateUserReturn {
  id: string
  error?: ControllerError
}

type Modify<T, R> = Omit<T, keyof R> & R

export type CreateUserData = Modify<
  Omit<User, 'subjects'>,
  {
    school_year: number
    shift: number
    course_id: number
    subjects_id: Array<number>
    photos: Array<string>
  }
>
