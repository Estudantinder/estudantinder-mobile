export default class Contacts {
  public facebook: string | undefined
  public instagram: string | undefined
  public whatsapp: string | undefined
  public twitter: string | undefined

  constructor(props: Contacts) {
    this.facebook = props.facebook
    this.instagram = props.instagram
    this.whatsapp = props.whatsapp
    this.twitter = props.twitter
  }
}
