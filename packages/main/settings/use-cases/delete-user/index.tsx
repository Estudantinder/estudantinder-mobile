import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DeleteUserUseCase() {
  try {
    await api.delete('/users')
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
