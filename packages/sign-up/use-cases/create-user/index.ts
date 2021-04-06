import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import User from 'packages/entities/User'

import CreateUserApiSerializer from './CreateUserApiSerializer'

export interface CreateUserApiResponse {
  id: string
}

export default async function CreateUserUseCase(user: User): Promise<string> {
  try {
    const serializedUser = CreateUserApiSerializer(user)

    const { data } = await api.post<CreateUserApiResponse>(
      '/users',
      serializedUser
    )

    return data.id
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
