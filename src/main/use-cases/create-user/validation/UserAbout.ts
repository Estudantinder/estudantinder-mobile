import * as Yup from 'yup'

import { UserAbout } from 'main/entities/User'

import FormattedValidationError from 'shared/FormattedValidationError'

type PersonKeys = Record<keyof UserAbout, unknown>

export default async function validateUserAboutData(data: UserAbout) {
  try {
    const schema = Yup.object().shape<PersonKeys>({
      name: Yup.string().required(),
      birth_date: Yup.string().required(),
      gender: Yup.string().optional(),
    })

    await schema.validate(data, { abortEarly: false })
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
