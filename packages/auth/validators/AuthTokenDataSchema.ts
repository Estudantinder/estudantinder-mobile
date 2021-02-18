import * as Yup from 'yup'

import { CreateAuthTokenData } from '../use-cases/create-token'

export default Yup.object().shape<CreateAuthTokenData>({
  email: Yup.string()
    .email('Digite um e-mail válido')
    .required('Digite um e-mail'),
  password: Yup.string().required('Digite uma senha').trim(),
  stay_logged: Yup.boolean().required('Informe se você quer continuar logado'),
})
