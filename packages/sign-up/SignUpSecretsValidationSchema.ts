import * as Yup from 'yup'

import { ContextUserSecrets } from 'packages/edit-student-info/pages/Secrets'

type SecretsKeys = Record<keyof ContextUserSecrets, Yup.AnySchema>

export default Yup.object().shape<SecretsKeys>({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Digite um e-mail')
    .trim(),
  password: Yup.string()
    .min(8, 'A senha deve ter ao menos 8 caracteres')
    .matches(/\d/, 'A senha precisa ter ao menos 1 número')
    .required('Digite uma senha')
    .trim(),
  confirm_password: Yup.string()
    .equals([Yup.ref('password')], 'As senhas precisam ser iguais')
    .required('Confirme sua senha')
    .trim(),
})
