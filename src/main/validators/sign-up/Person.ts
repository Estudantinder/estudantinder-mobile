import * as Yup from 'yup'

export default function ValidateSignUpPerson() {
  return Yup.object().shape({
    name: Yup.string().required(),
    birth_date: Yup.string().required(),
    gender: Yup.string().optional(),
  })
}
