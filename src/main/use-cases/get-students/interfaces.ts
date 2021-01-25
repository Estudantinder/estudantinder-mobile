import Course from 'main/entities/Course'
import School from 'main/entities/School'
import Student from 'main/entities/Student'
import Subject from 'main/entities/Subject'
import { ControllerError } from 'main/utils/interfaces'

import { Gender } from 'shared/interfaces'

export interface GetStudentsReturn {
  students: Student[]
  error?: ControllerError
}

export interface GetStudentsApiData {
  bio: string
  birth_date: string
  classroom: string
  course: Course
  gender: Gender
  name: string
  school: School
  school_year: number
  shift: number
  subjects: Subject[]
  photos: Array<string>
  id: number
}
