import { isPhone } from 'brazilian-values'
import * as Yup from 'yup'

import Contacts from 'packages/entities/Contacts'

type ContactsKeys = Record<keyof Contacts, unknown>

export default Yup.object().shape<ContactsKeys>({
  whatsapp: Yup.string()
    .test('valid_tel', 'Digite um telefone válido (com DDD)', (value) => {
      if (!value) return true

      if (!isPhone(value)) return false

      if (value.startsWith('+55') || value.startsWith('(')) return true

      return false
    })
    .optional(),
  twitter: Yup.string()
    .test('valid_twitter', 'Digite um username do Twitter válido', (value) => {
      if (!value) return true

      if (value.includes(' ')) return false

      return true
    })
    .optional()
    .trim(),
  facebook: Yup.string()
    .test(
      'valid_facebook',
      'Digite um username do Facebook válido',
      (value) => {
        if (!value) return true

        if (value.includes(' ')) return false

        return true
      }
    )
    .optional()
    .trim(),
  instagram: Yup.string()
    .test(
      'valid_instagram',
      'Digite um username do Instagram válido',
      (value) => {
        if (!value) return true

        if (value.includes(' ')) return false

        return true
      }
    )
    .optional()
    .trim(),
})
