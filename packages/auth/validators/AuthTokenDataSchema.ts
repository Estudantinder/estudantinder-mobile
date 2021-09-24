import * as Yup from 'yup'

import { CreateAuthTokenData } from '../use-cases/create-token'

type CreateAuthTokenDataSchema = Record<
  keyof CreateAuthTokenData,
  Yup.AnySchema
>

export default Yup.object().shape<CreateAuthTokenDataSchema>({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Digite um e-mail'),
  password: Yup.string().required('Digite uma senha').trim(),
  stay_logged: Yup.boolean().required('Informe se você quer continuar logado'),
})
