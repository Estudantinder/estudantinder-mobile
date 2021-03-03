import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DeleteUserUseCase() {
  try {
    await api.delete('/users')
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
