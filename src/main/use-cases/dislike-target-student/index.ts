import api from 'main/api'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

export default async function dislikeTargetStudent(id: string) {
  try {
    await api.post(`/students/dislikes/${id}`)
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
