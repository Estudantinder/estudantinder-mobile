import axios from 'axios'
import env from 'env'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DislikeStudentUseCase(id: string): Promise<void> {
  try {
    if (!env().like_and_dislike) return

    await api.post(`/students/${id}/dislike`)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
