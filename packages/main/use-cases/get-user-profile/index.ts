import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import User from 'packages/entities/User'

import GetStudentSerializer from '../get-students/GetStudentSerializer'

export default async function GetUserProfileUseCase() {
  try {
    const response = await api.get(`/users`)

    const student = GetStudentSerializer(response.data)

    return new User({
      ...student,
      email: response.data.email,
      contacts: response.data.contacts,
      password: '',
    })
  } catch (error) {
    if (error.response) {
      throw new ApiError({
        title: error.response?.data.error || 'SOMETHING WENT WRONG',
        message:
          error.response.data.message ||
          String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
