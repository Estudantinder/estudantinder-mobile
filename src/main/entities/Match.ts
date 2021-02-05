import Contacts from './Contacts'
import Student from './Student'

export default class Match extends Student {
  contacts: Contacts

  constructor(props: Match) {
    super(props)

    this.contacts = props.contacts
  }
}
