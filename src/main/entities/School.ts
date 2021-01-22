import Course from './Course'

export default class School {
  id: string
  name: string
  address: string

  courses: Array<Course>

  constructor(props: School) {
    this.courses = props.courses.map((value) => new Course(value))
    this.id = props.id
    this.name = props.name
    this.address = props.address
  }
}
