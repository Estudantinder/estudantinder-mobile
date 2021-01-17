import * as Yup from 'yup'

import { UserDetails } from 'main/entities/User'

import { DEFAULT_VALIDATION_OPTIONS } from 'shared/Constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type DetailsKeys = Record<keyof UserDetails, unknown>

export default async function validateUserDetailsData(data: UserDetails) {
  try {
    const schema = Yup.object().shape<DetailsKeys>({
      bio: Yup.string().max(256).required(),
      subjects: Yup.array().min(1).max(3).required(),
    })

    await schema.validate(data, DEFAULT_VALIDATION_OPTIONS)
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
