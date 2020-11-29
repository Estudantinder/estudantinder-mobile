import * as Yup from 'yup'

export interface IValidateSignUpSecretData {
  email: string
  password: string
  confirm_password: string
}

export default function ValidateSignUpSecret(data: IValidateSignUpSecretData) {
  return Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string()
      .required()
      .test('same-password', 'A senha precisa ser a mesma', (value) => {
        return value === data.password
      }),
  })
}
