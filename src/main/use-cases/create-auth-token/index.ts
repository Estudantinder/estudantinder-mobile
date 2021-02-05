import AsyncStorage from '@react-native-async-storage/async-storage'

import api from 'main/api'
import { IApiReturnError } from 'main/utils/interfaces'

import { STORAGE_AUTH_TOKEN } from 'shared/constants'

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
      '/users/login',
      {
        email: data.email,
        password: data.password,
      }
    )

    if (!response.data.jwt || !response.data.expireDate)
      throw new Error('JTW OR EXPIRE DATE NOT FOUND FROM SUCCESS RETURN')

    api.defaults.headers.authorization = `Bearer ${response.data.jwt}`

    if (data.stay_logged) {
      AsyncStorage.setItem(
        STORAGE_AUTH_TOKEN.TOKEN_KEY,
        String(response.data.jwt)
      )

      AsyncStorage.setItem(
        STORAGE_AUTH_TOKEN.EXPIRATION_KEY,
        String(response.data.expireDate)
      )
    }

    return { token: response.data.jwt }
  } catch (err) {
    if (err.response) {
      const { error: title, message } = err.response.data as IApiReturnError

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
