export default class Course {
  public id: string
  public name: string

  constructor(props: Course) {
    this.id = String(props.id)
    this.name = props.name
  }
}
