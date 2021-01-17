import { ControllerError } from 'shared/interfaces'

export interface CreateAuthTokenData {
  email: string
  password: string
  stay_logged: boolean
}

export interface CreateAuthTokenApiResponse {
  expireDate: string
  jwt: string
}

export interface CreateAuthTokenReturn {
  token: string | null
  error?: ControllerError
}
