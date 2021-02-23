import Course from './Course'
import { GENDERS } from './Gender'
import School from './School'
import { SHIFTS } from './Shift'
import Subject from './Subject'

export default class Filter {
  school_year?: string
  shift?: SHIFTS
  gender?: GENDERS
  course?: Course
  school?: School
  subjects?: Array<Subject>

  constructor(props: Filter) {
    this.school_year = props.school_year
    this.shift = props.shift
    this.school = props.school
    this.gender = props.gender
    this.course = props.course
    this.subjects = props.subjects
  }
}
