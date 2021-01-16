export default class Subject {
  id: string
  name: string

  constructor(props: Subject) {
    this.id = String(props.id)
    this.name = props.name
  }
}
