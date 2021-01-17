export default class School {
  id: string
  name: string
  address: string

  courses: Array<{
    id: string
    name: string
  }>

  constructor(props: School) {
    this.courses = props.courses
    this.id = props.id
    this.name = props.name
    this.address = props.address
  }
}
