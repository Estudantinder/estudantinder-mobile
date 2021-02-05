import Course from 'main/entities/Course'
import School from 'main/entities/School'
import Subject from 'main/entities/Subject'

import { GENDERS_ENUM, SHIFTS } from 'shared/constants'

export interface FiltersData {
  course?: Course
  gender?: GENDERS_ENUM
  school?: School
  school_year?: number
  shift?: SHIFTS
  subjects: Array<Subject>
}

export interface ApiEditFiltersData {
  course_id?: number
  gender?: GENDERS_ENUM
  school_id?: number
  school_year?: number
  shift?: SHIFTS
  subjects_ids?: Array<number>
}

export default class FiltersDataAdapter {
  static toApiData(data: FiltersData): ApiEditFiltersData {
    return {
      course_id: Number(data.course),
      school_id: Number(data.school),
      gender: data.gender,
      school_year: Number(data.school_year),
      shift: data.shift,
      subjects_ids: data.subjects.map((value) => Number(value.id)),
    }
  }
}
