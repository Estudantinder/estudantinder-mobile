import env from 'env'

import Course from './Course'
import Gender, { IGender } from './Gender'
import School from './School'
import Shift, { SHIFTS } from './Shift'
import Subject from './Subject'

export interface StudentAbout {
  name: string
  birth_date: Date
  gender?: IGender
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

interface StudentInfo
  extends StudentAbout,
    StudentSchool,
    StudentDetails,
    StudentPhotos {}

export default class Student implements StudentInfo {
  name: string
  birth_date: Date
  bio: string
  gender?: IGender

  school_year: number
  shift: SHIFTS
  subjects: Array<Subject>
  course: Course
  classroom: string

  school: School

  photos: Array<string>

  readonly id: string

  constructor(props: Student) {
    this.id = props.id

    this.name = props.name
    this.bio = props.bio
    this.birth_date = new Date(props.birth_date)
    if (props.gender) this.gender = new Gender(props.gender).gender

    this.course = new Course(props.course)
    this.school = new School(props.school)
    this.classroom = props.classroom
    this.school_year = props.school_year
    this.shift = new Shift(props.shift).shift

    this.subjects = props.subjects.map((value) => new Subject(value))

    if (!props.photos?.length) {
      if (env().env_name === 'dev') {
        this.photos = [
          'https://images.unsplash.com/photo-1529778873920-4da4926a72c2',
        ]
      } else {
        this.photos = ['']
      }
    } else {
      this.photos = props.photos
    }
  }
}
