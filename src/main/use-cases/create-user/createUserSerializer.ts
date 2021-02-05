import User from 'main/entities/User'

import { CreateUserApiData } from './interfaces'

export default function createUserSerializer(user: User): CreateUserApiData {
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
