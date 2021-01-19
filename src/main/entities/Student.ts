import { SHIFTS } from 'shared/constants'
import { Gender } from 'shared/interfaces'

import School from './School'
import Subject from './Subject'

export interface StudentAbout {
  name: string
  birth_date: string
  gender?: Gender
}

interface Course {
  id: string
  name: string
}

export interface StudentSchool {
  school_year: number
  shift: SHIFTS
  course_id: string
  course?: Course
  classroom: string
}

export interface StudentDetails {
  bio: string
  subjects: Array<Subject>
}

export default class Student
  implements StudentAbout, StudentSchool, StudentDetails {
  public name: string
  public birth_date: string
  public bio: string
  public gender?: Gender

  public school_year: number
  public shift: SHIFTS
  public subjects: Array<Subject>
  public course?: Course
  public course_id: string
  public classroom: string

  public school?: School

  constructor(props: Student) {
    this.name = props.name
    this.bio = props.bio
    this.birth_date = props.birth_date
    this.gender = props.gender
    this.course_id = props.course_id
    this.course = props.course
    this.school = props.school
    this.classroom = props.classroom
    this.school_year = props.school_year
    this.shift = props.shift
    this.subjects = props.subjects
  }
}
