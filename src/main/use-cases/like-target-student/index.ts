import env from 'env'

import api from 'main/api'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

export default async function likeTargetStudent(id: string) {
  try {
    if (!env().like_and_dislike) return

    await api.post(`/students/likes/${id}`)
  } catch (error) {
    if (error.response) {
      const { error: title, message } = error.response.data as IApiReturnError

      throw new ApiError({
        title: title || 'ALGO DEU ERRADO!',
        message: message || String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
