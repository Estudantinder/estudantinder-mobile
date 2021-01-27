import * as Yup from 'yup'

import Contacts from 'main/entities/Contacts'

type ContactsKeys = Record<keyof Contacts, unknown>

export default Yup.object().shape<ContactsKeys>({
  whatsapp: Yup.string().optional(),
  twitter: Yup.string().optional(),
  facebook: Yup.string().optional(),
  instagram: Yup.string().optional(),
})
