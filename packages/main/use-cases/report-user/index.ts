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
    api
    props

    return
    // await api.post(`/users/report/${props.id}`, {
    //   type: props.type,
    //   message: props.message,
    // })
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
