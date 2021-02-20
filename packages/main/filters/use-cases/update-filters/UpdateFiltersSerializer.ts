import { GENDERS } from 'packages/entities/Gender'
import { SHIFTS } from 'packages/entities/Shift'
import Subject from 'packages/entities/Subject'

export interface FiltersFormData {
  course?: number
  gender?: GENDERS
  school?: number
  school_year?: number
  shift?: SHIFTS
  subjects?: Array<Subject>
}

export interface UpdateFiltersApiData {
  course_id: number
  gender: GENDERS | string
  school_id: number
  school_year: number
  shift: number
  subjects_ids: Array<number>
}

export default function UpdateFiltersSerializer(
  data: FiltersFormData
): UpdateFiltersApiData {
  return {
    course_id: data.course ? Number(data.course) : -1,
    gender: data.gender || '-1',
    school_id: data.school ? Number(data.school) : -1,
    school_year: data.school_year ? Number(data.school_year) : -1,
    shift: data.shift ? Number(data.shift) : -1,
    subjects_ids: data.subjects?.length
      ? data.subjects.map((value) => Number(value.id))
      : [],
  }
}
