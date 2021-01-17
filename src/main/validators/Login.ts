import * as Yup from 'yup'

import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'

type LoginKeys = Record<keyof CreateAuthTokenData, unknown>

export default function ValidateLogin() {
  return Yup.object().shape<LoginKeys>({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    stay_logged: Yup.boolean().required(),
  })
}
