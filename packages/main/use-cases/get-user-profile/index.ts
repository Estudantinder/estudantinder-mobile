import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import User from 'packages/entities/User'

import GetStudentSerializer from '../get-students/GetStudentSerializer'

export default async function GetUserProfileUseCase() {
  try {
    const response = await api.get(`/users/me`)

    const student = GetStudentSerializer(response.data)

    return new User({
      ...student,
      email: response.data.email,
      contacts: response.data.contacts,
      password: '',
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
