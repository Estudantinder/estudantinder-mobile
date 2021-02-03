import User from 'main/entities/User'

import { CreateUserApiData } from './interfaces'

export default function createUserSerializer(user: User): CreateUserApiData {
  const getUtcDate = () => {
    const newDate = new Date(user.birth_date).toISOString()

    const tIndex = newDate.indexOf('T')

    return newDate.substring(0, tIndex)
  }

  return {
    bio: user.bio,
    birth_date: getUtcDate(),
    classroom: user.classroom,
    contacts: user.contacts,
    course_id: Number(user.course.id),
    email: user.email,
    name: user.name,
    password: user.password,
    school_year: Number(user.school_year),
    shift: Number(user.shift),
    subjects_id: user.subjects.map((value) => Number(value.id)),
    gender: user.gender,
  }
}
