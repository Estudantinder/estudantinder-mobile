import Contacts from './Contacts'
import Student from './Student'

export default class Match extends Student {
  contacts: Contacts
  match_id: string

  constructor(props: Match) {
    super(props)

    this.contacts = props.contacts
    this.match_id = props.match_id
  }
}
