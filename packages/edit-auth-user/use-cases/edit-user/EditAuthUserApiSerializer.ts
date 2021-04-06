import ContactsToApiFormat from 'packages/adapters/ContactsToApiFormat'
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
    contacts: user.contacts
      ? new ContactsToApiFormat(user.contacts).contacts
      : undefined,
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
