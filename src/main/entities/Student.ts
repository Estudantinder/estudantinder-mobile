import { SHIFTS } from 'shared/constants'
import { Gender } from 'shared/interfaces'

export interface StudentAbout {
  name: string
  birth_date: string
  gender?: Gender
}

export interface StudentSchool {
  school_year: number
  shift: SHIFTS
  course_id: string
  classroom: string
}

export interface StudentDetails {
  bio: string
  subjects: Array<string>
}

export default class Student
  implements StudentAbout, StudentSchool, StudentDetails {
  public name: string
  public birth_date: string
  public bio: string
  public gender?: Gender

  public school_year: number
  public shift: SHIFTS
  public subjects: Array<string>
  public course_id: string
  public classroom: string

  constructor(props: ABC) {
    this.name = props.name
    this.bio = props.bio
    this.birth_date = props.birth_date
    this.gender = props.gender
    this.course_id = props.course_id
    this.classroom = props.classroom
    this.school_year = props.school_year
    this.shift = props.shift
    this.subjects = props.subjects
  }
}
