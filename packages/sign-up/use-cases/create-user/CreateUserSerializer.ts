import Contacts from 'packages/entities/Contacts'
import { IGender } from 'packages/entities/Gender'
import { SHIFTS } from 'packages/entities/Shift'
import User from 'packages/entities/User'

export interface CreateUserApiData {
  name: string
  email: string
  password: string
  school_year: number
  birth_date: Array<number>
  bio: string
  gender?: IGender
  shift: SHIFTS
  subjects_ids: Array<number>
  course_id: number
  classroom: string
  contacts: Contacts
}

export default function CreateUserSerializer(user: User): CreateUserApiData {
  const getApiDate = () => {
    const year = user.birth_date.getFullYear()

    const month = user.birth_date.getMonth()

    const day = user.birth_date.getDate()

    return [year, month, day]
  }

  return {
    bio: user.bio,
    birth_date: getApiDate(),
    classroom: user.classroom,
    contacts: user.contacts,
    course_id: Number(user.course.id),
    email: user.email,
    name: user.name,
    password: user.password,
    school_year: Number(user.school_year),
    shift: Number(user.shift),
    subjects_ids: user.subjects.map((value) => Number(value.id)),
    gender: user.gender,
  }
}
