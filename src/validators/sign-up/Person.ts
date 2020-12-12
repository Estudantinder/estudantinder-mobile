import * as Yup from 'yup'

export interface IValidateSignUpPersonData {
  name: string
  birth_date: Date
  gender?: string
}

export default function ValidateSignUpPerson() {
  return Yup.object().shape<IValidateSignUpPersonData>({
    name: Yup.string().required(),
    birth_date: Yup.date().required(),
    gender: Yup.string().optional(),
  })
}
