import Contacts from 'main/entities/Contacts'
import { ControllerError } from 'main/utils/interfaces'

import { SHIFTS } from 'shared/constants'
import { Gender } from 'shared/interfaces'

export interface CreateUserApiResponse {
  id: string
}

export interface CreateUserReturn {
  id: string
  error?: ControllerError
}

export interface CreateUserApiData {
  name: string
  email: string
  password: string
  school_year: number
  birth_date: string
  bio: string
  gender?: Gender
  shift: SHIFTS
  photos: Array<string>
  subjects_id: Array<number>
  course_id: number
  classroom: string
  contacts: Contacts
}
