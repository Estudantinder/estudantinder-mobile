export default class Contacts {
  public facebook?: string
  public instagram?: string
  public whatsapp?: string
  public twitter?: string

  constructor(props: Contacts) {
    props.facebook && (this.facebook = props.facebook)
    props.instagram && (this.instagram = props.instagram)
    props.whatsapp && (this.whatsapp = props.whatsapp)
    props.twitter && (this.twitter = props.twitter)
  }
}
