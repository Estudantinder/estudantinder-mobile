import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DeleteMatchUseCase(match_id: string) {
  try {
    await api.delete(`/students/matchs/${match_id}`)
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
