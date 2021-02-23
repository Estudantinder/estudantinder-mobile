import Course from 'packages/entities/Course'
import Filter from 'packages/entities/Filter'
import { GENDERS } from 'packages/entities/Gender'
import School from 'packages/entities/School'
import { SHIFTS } from 'packages/entities/Shift'
import Subject from 'packages/entities/Subject'

export interface GetFiltersApiResponse {
  school_year?: number
  shift?: SHIFTS
  gender?: GENDERS
  course?: Course
  school?: School
  subjects?: Array<Subject>
}

export default function GetFiltersSerializer(
  props: GetFiltersApiResponse
): Filter {
  const course = props.course ? new Course(props.course) : undefined
  const school = props.school ? new School(props.school) : undefined
  const subjects = props.subjects?.map((value) => new Subject(value))
  const shift = props.shift ? (String(props.shift) as never) : undefined
  const school_year = props.school_year ? String(props.school_year) : undefined

  return new Filter({
    school_year,
    shift,
    course,
    school,
    subjects,
    gender: props.gender,
  })
}
