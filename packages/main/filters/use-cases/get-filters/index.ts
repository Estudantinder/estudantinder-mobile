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
      throw new ApiError(error.response)
    }

    throw error
  }
}
