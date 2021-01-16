import User from 'main/entities/User'

export interface CreateUserApiResponse {
  id: string
}

export interface CreateUserApiError {
  error: string
  message: string
}

export interface CreateUserError {
  title: string
  message: string
}

export interface CreateUserReturn {
  id: string
  error?: CreateUserError
}

type Modify<T, R> = Omit<T, keyof R> & R

export type ICreateUser = Modify<
  Omit<User, 'subjects'>,
  {
    school_year: number
    shift: number
    course_id: number
    subjects_id: Array<number>
    photos: Array<string>
  }
>
