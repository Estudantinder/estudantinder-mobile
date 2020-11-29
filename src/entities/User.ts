import Contacts from './Contacts'

export default class User {
  public email: string
  public password: string
  public name: string
  public birth_date: string
  public gender: string
  public school: string
  public course: string
  public grade: string
  public period: string
  public classroom: string
  public contacts: Contacts

  constructor(props: User) {
    this.email = props.email
    this.password = props.password
    this.name = props.name
    this.birth_date = props.birth_date
    this.gender = props.gender
    this.school = props.school
    this.course = props.course
    this.grade = props.grade
    this.period = props.period
    this.classroom = props.classroom
    this.contacts = props.contacts
  }
}
