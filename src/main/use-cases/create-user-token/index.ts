import api from 'main/services/api'

import { ApiError } from 'shared/interfaces'

import {
  CreateUserTokenData,
  CreateUserTokenApiResponse,
  CreateUserTokenReturn,
} from './interfaces'

export default async function createUserToken(
  data: CreateUserTokenData
): Promise<CreateUserTokenReturn> {
  try {
    const response = await api.post<CreateUserTokenApiResponse>(
      '/student/login',
      {
        email: data.email,
        password: data.password,
      }
    )

    return { jwt: response.data.jwt }
  } catch (err) {
    if (err.response) {
      const { error: title, message } = err.response.data as ApiError

      return {
        jwt: null,
        error: {
          title: title || 'ALGO DEU ERRADO!',
          message: message || String(JSON.stringify(err.response.data)),
        },
      }
    }

    return {
      jwt: null,
      error: { title: err.name || 'ALGO DEU ERRADO!', message: err.message },
    }
  }
}
