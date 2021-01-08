import * as Yup from 'yup'

export default function ValidateSignUpDetails() {
  return Yup.object().shape({
    description: Yup.string().max(256).required(),
    subjects: Yup.array().min(1).max(3).required(),
  })
}
