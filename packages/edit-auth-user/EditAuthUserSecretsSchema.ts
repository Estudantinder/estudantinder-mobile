import * as Yup from 'yup'

import { ContextUserSecrets } from 'packages/edit-student-info/pages/Secrets'

type SecretsKeys = Record<keyof ContextUserSecrets, unknown>

export default Yup.object().shape<SecretsKeys>({
  email: Yup.string().email('Digite um e-mail válido').required().trim(),
  password: Yup.string().notRequired().trim(),
  confirm_password: Yup.string()
    .equals([Yup.ref('password')], 'As senhas precisam ser iguais')
    .notRequired()
    .trim(),
})
