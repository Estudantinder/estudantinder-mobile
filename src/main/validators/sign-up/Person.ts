import * as Yup from 'yup'

import { UserAbout } from 'main/entities/User'

type PersonKeys = Record<keyof UserAbout, unknown>

export default function ValidateSignUpPerson() {
  return Yup.object().shape<PersonKeys>({
    name: Yup.string().required(),
    birth_date: Yup.string().required(),
    gender: Yup.string().optional(),
  })
}
