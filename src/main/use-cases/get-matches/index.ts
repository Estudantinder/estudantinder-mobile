import api from 'main/api'
import Match from 'main/entities/Match'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

import { GetMatchApiData } from './GetMatchApiData'

export default async () => {
  try {
    const response = await api.get<GetMatchApiData[]>('/students/matchs')

    const matches = response.data.map(
      ({ matchedStudent, matchedId }) =>
        new Match({ ...matchedStudent, match_id: String(matchedId) })
    )

    matches.reverse()

    return matches
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
