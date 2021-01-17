import * as Yup from 'yup'

import { UserSecrets } from 'main/entities/User'

import { DEFAULT_VALIDATION_OPTIONS } from 'shared/Constants'
import FormattedValidationError from 'shared/FormattedValidationError'

export interface UserSecretsData extends UserSecrets {
  confirm_password: string
}

type SecretsKeys = Record<keyof UserSecretsData, unknown>

export default async function validateUserSecretsData(data: UserSecretsData) {
  try {
    const schema = Yup.object().shape<SecretsKeys>({
      email: Yup.string().email().required(),
      password: Yup.string().min(8).matches(/\d/).required(),
      confirm_password: Yup.string()
        .required()
        .test('same-password', 'A senha precisa ser a mesma', (value) => {
          return value === data.password
        }),
    })

    await schema.validate(data, DEFAULT_VALIDATION_OPTIONS)
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
