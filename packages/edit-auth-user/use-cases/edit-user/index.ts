import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import User from 'packages/entities/User'

import EditAuthUserApiSerializer from './EditAuthUserApiSerializer'

export default async function EditAuthUserUseCase(
  user: Partial<User>
): Promise<void> {
  try {
    const serializedUser = EditAuthUserApiSerializer(user)

    await api.put('/users', serializedUser)
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
