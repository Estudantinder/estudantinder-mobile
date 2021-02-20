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

    const month = user.birth_date.getMonth() + 1

    const day = user.birth_date.getDate()

    return [year, month, day]
  }

  const getContacts = () => {
    const contacts: Contacts = {}

    const getWhatsapp = (value: string) => {
      const number = value.match(/\d/g)?.join('')

      if (number?.startsWith('11')) return `55${number}`

      if (number?.startsWith('55')) return number

      return undefined
    }

    const getValidUsername = (value: string) => {
      if (value.startsWith('@')) return value.substr(1).trim()

      return value.trim()
    }

    if (user.contacts.whatsapp) {
      contacts.whatsapp = getWhatsapp(user.contacts.whatsapp)
    }

    if (user.contacts.twitter) {
      contacts.twitter = getValidUsername(user.contacts.twitter)
    }

    if (user.contacts.facebook) {
      contacts.facebook = getValidUsername(user.contacts.facebook)
    }

    if (user.contacts.instagram) {
      contacts.instagram = getValidUsername(user.contacts.instagram)
    }

    return new Contacts(contacts)
  }

  return {
    bio: user.bio,
    birth_date: getApiDate(),
    classroom: user.classroom,
    contacts: getContacts(),
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
