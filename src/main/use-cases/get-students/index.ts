import api from 'main/api'
import { IApiReturnError } from 'main/utils/interfaces'

import getStudentSerializer from './getStudentSerializer'
import { GetStudentsApiData, GetStudentsReturn } from './interfaces'

export default async function getStudents(): Promise<GetStudentsReturn> {
  try {
    const response = await api.get<GetStudentsApiData[]>('/students')

    return {
      students: response.data.map((value) => getStudentSerializer(value)),
    }
  } catch (error) {
    if (error.response) {
      const { error: title, message } = error.response.data as IApiReturnError

      return {
        students: [],
        error: {
          title: title || 'ALGO DEU ERRADO!',
          message: message || String(JSON.stringify(error.response.data)),
        },
      }
    }

    return {
      students: [],
      error: {
        title: error.name || 'ALGO DEU ERRADO!',
        message: error.message,
      },
    }
  }
}
