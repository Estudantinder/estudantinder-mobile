import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import Match from 'packages/entities/Match'

export interface GetMatchApiData {
  matchedStudent: Match
  matchId: number
}

export default async function GetMatchesUseCase() {
  try {
    const response = await api.get<GetMatchApiData[]>('/students/matchs')

    const matches = response.data.map(
      ({ matchedStudent, matchId }) =>
        new Match({
          ...matchedStudent,
          birth_date: new Date(matchedStudent.birth_date),
          match_id: String(matchId),
        })
    )

    matches.reverse()

    return matches
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
