import api from 'main/api'
import User from 'main/entities/User'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

export default async function getJwtUser() {
  try {
    const response = await api.get(`/users`)

    return new User(response.data)
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
