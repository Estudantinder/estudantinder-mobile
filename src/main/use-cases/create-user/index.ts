import api from 'main/api'
import User from 'main/entities/User'
import { IApiReturnError } from 'main/utils/interfaces'

import createUserSerializer from './createUserSerializer'
import { CreateUserApiResponse, CreateUserReturn } from './interfaces'

export default async function createUser(
  user: User
): Promise<CreateUserReturn> {
  try {
    const serializedUser = createUserSerializer(user)

    const { data } = await api.post<CreateUserApiResponse>(
      '/users',
      serializedUser
    )

    return { id: data.id }
  } catch (err) {
    if (err.response) {
      const { error: title, message } = err.response.data as IApiReturnError

      return {
        id: '',
        error: {
          title: title || 'ALGO DEU ERRADO!',
          message: message || String(JSON.stringify(err.response.data)),
        },
      }
    }

    return {
      id: '',
      error: { title: err.name || 'ALGO DEU ERRADO!', message: err.message },
    }
  }
}
