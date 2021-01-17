import * as Yup from 'yup'

import { UserDetails } from 'main/entities/User'

type DetailsKeys = Record<keyof UserDetails, unknown>

export default function ValidateSignUpDetails() {
  return Yup.object().shape<DetailsKeys>({
    bio: Yup.string().max(256).required(),
    subjects: Yup.array().min(1).max(3).required(),
  })
}
