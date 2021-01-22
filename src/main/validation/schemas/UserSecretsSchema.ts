import * as Yup from 'yup'

import { UserSecrets } from 'main/entities/User'

type SecretsKeys = Record<keyof UserSecrets | 'confirm_password', unknown>

export default Yup.object().shape<SecretsKeys>({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).matches(/\d/).required(),
  confirm_password: Yup.string()
    .equals([Yup.ref('password')])
    .required(),
})
