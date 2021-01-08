import * as Yup from 'yup'

export default function ValidateSignUpContacts() {
  return Yup.object().shape({
    whatsapp: Yup.number().optional(),
    twitter: Yup.string().optional(),
    facebook: Yup.string().optional(),
    instagram: Yup.string().optional(),
  })
}
