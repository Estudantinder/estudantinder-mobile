import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

import UpdateFiltersSerializer, {
  FiltersFormData,
} from './UpdateFiltersSerializer'

export default async function UpdateFiltersUseCase(data: FiltersFormData) {
  try {
    const serializedFilters = UpdateFiltersSerializer(data)

    await api.put('/users/filters', serializedFilters)
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
