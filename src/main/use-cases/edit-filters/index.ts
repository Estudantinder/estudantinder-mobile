import api from 'main/api'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

import EditFiltersApiData, { FiltersData } from './FiltersDataAdapter'

export default async (data: FiltersData) => {
  try {
    const apiData = EditFiltersApiData.toApiData(data)

    await api.put('/users/filters', apiData)
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
