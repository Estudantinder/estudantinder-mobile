import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import UserToApiSerializer from 'packages/api/utils/UserToApiSerializer'
import User from 'packages/entities/User'

export interface CreateUserApiResponse {
  id: string
}

export default async function EditAuthUserUseCase(user: User): Promise<void> {
  try {
    const serializedUser = UserToApiSerializer(user)

    await api.put('/users', serializedUser)
  } catch (error) {
    if (error.response) {
      throw new ApiError({
        title: error.response?.data.error || 'SOMETHING WENT WRONG',
        message:
          error.response.data.message ||
          String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
