import { ControllerError } from 'shared/interfaces'

export interface CreateUserTokenData {
  email: string
  password: string
  stay_logged: boolean
}

export interface CreateUserTokenApiResponse {
  expireDate: Date
  jwt: string
}

export interface CreateUserTokenReturn {
  jwt: string | null
  error?: ControllerError
}
