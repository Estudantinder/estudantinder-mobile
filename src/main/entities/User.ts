import { Gender, SHIFTS } from 'shared/constants'

import Contacts from './Contacts'

export interface UserSecrets {
  email: string
  password: string
}
export interface UserAbout {
  name: string
  birth_date: string
  gender?: Gender
}

export interface UserSchool {
  school_year: number
  shift: SHIFTS
  course_id: string
  classroom: string
}

export interface UserDetails {
  bio: string
  subjects: Array<string>
}

export default class User
  implements UserSecrets, UserAbout, UserSchool, UserDetails {
  public name: string
  public email: string
  public password: string

  public birth_date: string
  public bio: string
  public gender?: Gender

  public school_year: number
  public shift: SHIFTS
  public subjects: Array<string>
  public course_id: string
  public classroom: string

  public contacts: Contacts

  constructor(props: User) {
    this.name = props.name
    this.email = props.email
    this.password = props.password
    this.birth_date = props.birth_date
    this.bio = props.bio
    this.gender = props.gender
    this.school_year = props.school_year
    this.shift = props.shift
    this.subjects = props.subjects
    this.course_id = props.course_id
    this.classroom = props.classroom

    this.contacts = new Contacts(props.contacts)
  }
}
