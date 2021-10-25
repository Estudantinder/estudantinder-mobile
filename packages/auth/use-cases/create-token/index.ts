import AsyncStorage from '@react-native-async-storage/async-storage'

import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import { STORAGE_AUTH_TOKEN } from 'packages/auth/shared'

export interface CreateAuthTokenData {
  email: string
  password: string
  stay_logged: boolean
}

export interface CreateAuthTokenApiResponse {
  expire_date: string
  jwt: string
}

export default async function CreateAuthTokenUseCase(
  data: CreateAuthTokenData
): Promise<string> {
  try {
    const response = await api.post<CreateAuthTokenApiResponse>(
      '/users/session',
      {
        email: data.email,
        password: data.password,
      }
    )

    if (!response.data.jwt || !response.data.expire_date) {
      throw new Error('JWT OR EXPIRE DATE NOT FOUND FROM SUCCESS RETURN')
    }

    api.defaults.headers.authorization = `Bearer ${response.data.jwt}`

    if (data.stay_logged) {
      AsyncStorage.setItem(
        STORAGE_AUTH_TOKEN.TOKEN_KEY,
        String(response.data.jwt)
      )

      AsyncStorage.setItem(
        STORAGE_AUTH_TOKEN.EXPIRATION_KEY,
        String(response.data.expire_date)
      )
    }

    return response.data.jwt
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
