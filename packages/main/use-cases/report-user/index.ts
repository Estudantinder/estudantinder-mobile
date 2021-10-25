import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import { ReportTypes } from 'packages/main/target-profile/report_types'

export interface ReportUserUseCaseProps {
  id: string
  type: ReportTypes
  message?: string
}

export default async function ReportUserUseCase(
  props: ReportUserUseCaseProps
): Promise<void> {
  try {
    await api.post(`/users/${props.id}/report`, {
      type: props.type,
      description: props.message,
    })
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
