import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

import GetFiltersSerializer, {
  GetFiltersApiResponse,
} from './GetFiltersSerializer'

export default async function GetFiltersUseCase() {
  try {
    const response = await api.get<GetFiltersApiResponse>('/users/filters')

    return GetFiltersSerializer(response.data)
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
