import User from 'main/entities/User'

import { ICreateUser } from './interfaces'

export default function createUserSerializer(user: User): ICreateUser {
  function transformToUTCDate(date: string) {
    const newDate = new Date(date)

    const day = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()

    let utcDate

    utcDate = `${year}-`

    utcDate += `${month < 10 ? '0' : ''}${month + 1}-`

    utcDate += `${day < 10 ? '0' : ''}${day}`

    return utcDate
  }

  return {
    bio: user.bio,
    birth_date: transformToUTCDate(user.birth_date),
    classroom: user.classroom,
    contacts: user.contacts,
    course_id: Number(user.course_id),
    email: user.email,
    name: user.name,
    password: user.password,
    school_year: Number(user.school_year),
    shift: Number(user.shift),
    photos: ['imagem.jpg'],
    subjects_id: user.subjects.map((value) => Number(value)),
    gender: user.gender,
  }
}
