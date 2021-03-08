import Contacts from 'packages/entities/Contacts'
import User from 'packages/entities/User'
import { CreateUserApiData } from 'packages/sign-up/use-cases/create-user/CreateUserApiSerializer'

export type EditAuthUserApiData = Partial<CreateUserApiData>

export default function EditAuthUserApiSerializer(
  user: Partial<User>
): EditAuthUserApiData {
  const getApiDate = () => {
    if (!user.birth_date) return undefined

    const year = user.birth_date.getFullYear()

    const month = user.birth_date.getMonth() + 1

    const day = user.birth_date.getDate()

    return [year, month, day]
  }

  const getContacts = () => {
    if (!user.contacts) return undefined

    const contacts: Contacts = {}

    const getWhatsapp = (value?: string) => {
      if (!value) return undefined

      const number = value.match(/\d/g)?.join('')

      if (number?.startsWith('11')) return `55${number}`

      if (number?.startsWith('55')) return number

      return undefined
    }

    const getValidUsername = (value: string) => {
      if (!value) return undefined

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

  const numberOrUndefined = (value: unknown | undefined) => {
    if (!value) return undefined

    const newValue = Number(value)

    if (isNaN(newValue)) return undefined

    return newValue
  }

  return {
    bio: user.bio,
    birth_date: getApiDate(),
    classroom: user.classroom,
    contacts: getContacts(),
    course_id: numberOrUndefined(user.course?.id),
    email: user.email,
    name: user.name,
    password: user.password,
    school_year: numberOrUndefined(user.school_year),
    shift: numberOrUndefined(user.shift),
    subjects_ids: user.subjects?.map((value) => Number(value.id)),
    gender: user.gender,
  }
}
