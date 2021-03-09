import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

import GetStudentSerializer from '../get-students/GetStudentSerializer'

export default async function GetUserProfileUseCase() {
  try {
    const response = await api.get(`/users`)

    const student = GetStudentSerializer(response.data)

    return { ...student, email: response.data.email }
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
