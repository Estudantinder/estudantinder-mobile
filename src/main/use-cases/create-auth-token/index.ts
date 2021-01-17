import AsyncStorage from '@react-native-async-storage/async-storage'

import api from 'main/services/api'

import { STORAGE_AUTH_TOKEN } from 'shared/Constants'
import { ApiError } from 'shared/interfaces'

import {
  CreateAuthTokenData,
  CreateAuthTokenApiResponse,
  CreateAuthTokenReturn,
} from './interfaces'

export default async function createAuthToken(
  data: CreateAuthTokenData
): Promise<CreateAuthTokenReturn> {
  try {
    const response = await api.post<CreateAuthTokenApiResponse>(
      '/student/login',
      {
        email: data.email,
        password: data.password,
      }
    )

    if (!response.data.jwt || !response.data.expireDate)
      throw new Error('JTW OR EXPIRE DATE NOT FOUND FROM SUCCESS RETURN')

    if (data.stay_logged) {
      AsyncStorage.setItem(STORAGE_AUTH_TOKEN.TOKEN_KEY, response.data.jwt)
      AsyncStorage.setItem(
        STORAGE_AUTH_TOKEN.EXPIRATION_KEY,
        response.data.expireDate
      )
    }

    return { token: response.data.jwt }
  } catch (err) {
    if (err.response) {
      const { error: title, message } = err.response.data as ApiError

      return {
        token: null,
        error: {
          title: title || 'ALGO DEU ERRADO!',
          message: message || String(JSON.stringify(err.response.data)),
        },
      }
    }

    return {
      token: null,
      error: { title: err.name || 'ALGO DEU ERRADO!', message: err.message },
    }
  }
}
