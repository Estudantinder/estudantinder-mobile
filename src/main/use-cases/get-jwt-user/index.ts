import api from 'main/api'
import User from 'main/entities/User'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

export default async function getJwtUser() {
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
      const { error: title, message } = error.response.data as IApiReturnError

      throw new ApiError({
        title: title || 'ALGO DEU ERRADO!',
        message: message || String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
