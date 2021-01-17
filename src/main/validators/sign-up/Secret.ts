import * as Yup from 'yup'

import { UserSecrets } from 'main/entities/User'

export interface IValidateSignUpSecretData extends UserSecrets {
  confirm_password: string
}

type SecretsKeys = Record<keyof IValidateSignUpSecretData, unknown>

export default function ValidateSignUpSecret(data: IValidateSignUpSecretData) {
  return Yup.object().shape<SecretsKeys>({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).matches(/\d/).required(),
    confirm_password: Yup.string()
      .required()
      .test('same-password', 'A senha precisa ser a mesma', (value) => {
        return value === data.password
      }),
  })
}
