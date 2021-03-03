import env from 'env'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DislikeStudentUseCase(id: string): Promise<void> {
  try {
    if (!env().like_and_dislike) return

    await api.post(`/students/dislikes/${id}`)
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
