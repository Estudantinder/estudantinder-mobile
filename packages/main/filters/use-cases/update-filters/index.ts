import axios from 'axios'

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
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
