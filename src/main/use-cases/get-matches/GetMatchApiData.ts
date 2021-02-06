import Match from 'main/entities/Match'

export interface GetMatchApiData {
  matchedStudent: Modify<Match, { birth_date: Array<number> }>
  matchedId: number
}
