import { SHIFTS } from 'shared/constants'
import { Gender } from 'shared/interfaces'

import Course from './Course'
import School from './School'
import Subject from './Subject'

export interface StudentAbout {
  name: string
  birth_date: string
  gender?: Gender
}

export interface StudentSchool {
  school_year: number
  shift: SHIFTS
  school: School
  course: Course
  classroom: string
}

export interface StudentDetails {
  bio: string
  subjects: Array<Subject>
}

export interface StudentPhotos {
  photos: Array<string>
}

export default class Student
  implements StudentAbout, StudentSchool, StudentDetails, StudentPhotos {
  public name: string
  public birth_date: string
  public bio: string
  public gender?: Gender

  public school_year: number
  public shift: SHIFTS
  public subjects: Array<Subject>
  public course: Course
  public classroom: string

  public school: School

  public photos: Array<string>

  constructor(props: Student) {
    this.name = props.name
    this.bio = props.bio
    this.birth_date = props.birth_date
    this.gender = props.gender
    this.course = new Course(props.course)
    this.school = new School(props.school)
    this.classroom = props.classroom
    this.school_year = props.school_year
    this.shift = props.shift
    this.subjects = props.subjects.map((value) => new Subject(value))
    this.photos = props.photos
  }
}
