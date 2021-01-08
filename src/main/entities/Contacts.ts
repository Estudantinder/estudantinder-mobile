export default class Contacts {
  public facebook?: string
  public instagram?: string
  public whatsapp?: string
  public twitter?: string

  constructor(props: Contacts) {
    Object.assign(this, props) // TODO: make more safe
  }
}
