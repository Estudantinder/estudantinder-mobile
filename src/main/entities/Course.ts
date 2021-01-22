export default class Course {
  public id: string
  public name: string

  constructor(props: Course) {
    this.id = props.id
    this.name = props.name
  }
}
