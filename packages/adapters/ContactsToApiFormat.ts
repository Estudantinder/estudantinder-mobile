import Contacts from 'packages/entities/Contacts'

export default class ContactsToApiFormat {
  contacts: Contacts = {}

  constructor(contacts: Contacts) {
    if (contacts.whatsapp) {
      this.contacts.whatsapp = this.getWhatsapp(contacts.whatsapp)
    }

    if (contacts.twitter) {
      this.contacts.twitter = this.getValidUsername(contacts.twitter)
    }

    if (contacts.facebook) {
      this.contacts.facebook = this.getValidUsername(contacts.facebook)
    }

    if (contacts.instagram) {
      this.contacts.instagram = this.getValidUsername(contacts.instagram)
    }
  }

  getWhatsapp(value: string) {
    const number = value.match(/\d/g)?.join('')

    if (number?.startsWith('11')) return `55${number}`

    if (number?.startsWith('55')) return number

    return undefined
  }

  getValidUsername(value: string) {
    if (value.startsWith('@')) return value.substr(1).trim()

    return value.trim()
  }
}
