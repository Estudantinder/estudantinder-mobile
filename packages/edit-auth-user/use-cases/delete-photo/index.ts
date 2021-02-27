import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DeletePhotoUseCase(index: number) {
  try {
    await api.delete(`/users/deleteImage/${index}`)
  } catch (error) {
    if (error.response) {
      throw new ApiError({
        title: error.response.data.error || 'ALGO DEU ERRADO!',
        message:
          error.response.data.message ||
          String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
