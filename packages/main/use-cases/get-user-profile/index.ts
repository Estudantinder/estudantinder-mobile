import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import User from 'packages/entities/User'

export default async function GetUserProfileUseCase() {
  try {
    const response = await api.get(`/users`)

    const getApiDate = () => {
      return new Date(
        response.data.birth_date[0],
        response.data.birth_date[1],
        response.data.birth_date[2]
      )
    }

    return new User({ ...response.data, birth_date: getApiDate() })
  } catch (error) {
    if (error.response) {
      if (error.response) {
        throw new ApiError({
          title: error.response?.data.error || 'SOMETHING WENT WRONG',
          message:
            error.response.data.message ||
            String(JSON.stringify(error.response.data)),
        })
      }
    }

    throw error
  }
}
