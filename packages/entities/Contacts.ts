export default class Contacts {
  public facebook?: string
  public instagram?: string
  public whatsapp?: string
  public twitter?: string

  constructor(props: Contacts) {
    if (props.facebook) this.facebook = props.facebook
    if (props.instagram) this.instagram = props.instagram
    if (props.whatsapp) this.whatsapp = props.whatsapp
    if (props.twitter) this.twitter = props.twitter
  }
}
