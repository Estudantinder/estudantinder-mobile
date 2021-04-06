import api from 'packages/api'
import ApiError from 'packages/api/ApiError'
import Student from 'packages/entities/Student'

import GetStudentSerializer, {
  GetStudentsApiData,
} from './GetStudentSerializer'

export default async function GetStudentsUseCase(): Promise<Student[]> {
  try {
    const response = await api.get<GetStudentsApiData[]>('/students')

    return response.data?.map((value) => GetStudentSerializer(value))
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }
    throw error
  }
}
