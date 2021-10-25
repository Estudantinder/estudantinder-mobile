import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function DeleteMatchUseCase(match_id: string) {
  try {
    await api.delete(`/students/matches/${match_id}`)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
