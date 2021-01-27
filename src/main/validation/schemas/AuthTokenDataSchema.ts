import * as Yup from 'yup'

import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'

export default Yup.object().shape<CreateAuthTokenData>({
  email: Yup.string().email().required(),
  password: Yup.string().required().trim(),
  stay_logged: Yup.boolean().required(),
})
