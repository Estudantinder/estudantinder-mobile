import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import Match from 'packages/entities/Match'

export interface GetMatchApiData {
  matched_student: Match
  match_id: number
}

export default async function GetMatchesUseCase() {
  try {
    const response = await api.get<GetMatchApiData[]>('/students/matches')

    const matches = response.data.map(
      ({ matched_student, match_id }) =>
        new Match({
          ...matched_student,
          birth_date: new Date(matched_student.birth_date),
          match_id: String(match_id),
        })
    )

    matches.reverse()

    return matches
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
