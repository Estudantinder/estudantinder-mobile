import School from 'main/entities/School'
import Student from 'main/entities/Student'
import Subject from 'main/entities/Subject'
import { ControllerError } from 'main/utils/interfaces'

export interface GetStudentsReturn {
  students: Student[]
  error?: ControllerError
}

export interface GetStudentsApiData {
  bio: string
  birth_date: string
  classroom: string
  course: {
    id: number
    name: string
  }
  gender: string
  name: string
  school: School
  school_year: number
  shift: number
  subjects: Subject[]
}
