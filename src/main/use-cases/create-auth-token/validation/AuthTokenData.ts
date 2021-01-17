import * as Yup from 'yup'

import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'

import { DEFAULT_VALIDATION_OPTIONS } from 'shared/Constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type LoginKeys = Record<keyof CreateAuthTokenData, unknown>

export default async function validateAuthTokenData(data: CreateAuthTokenData) {
  try {
    const schema = Yup.object().shape<LoginKeys>({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
      stay_logged: Yup.boolean().required(),
    })

    await schema.validate(data, DEFAULT_VALIDATION_OPTIONS)
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
