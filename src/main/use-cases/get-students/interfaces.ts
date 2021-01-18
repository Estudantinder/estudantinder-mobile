import Student from 'main/entities/Student'
import { ControllerError } from 'main/utils/interfaces'

export interface GetStudentsReturn {
  students: Student[]
  error?: ControllerError
}
