import { MaskService } from 'react-native-masked-text'

import * as Yup from 'yup'

import Contacts from 'main/entities/Contacts'

type ContactsKeys = Record<keyof Contacts, unknown>

export default Yup.object().shape<ContactsKeys>({
  whatsapp: Yup.string()
    .test('valid_tel', 'Digite um telefone válido', (value) => {
      if (!value) return true

      return MaskService.isValid('cel-phone', value)
    })
    .optional(),
  twitter: Yup.string()
    .test('valid_twitter', 'Digite um username do Twitter válido', (value) => {
      if (!value) return true

      if (value[0] !== '@') return false

      return true
    })
    .optional()
    .trim(),
  facebook: Yup.string().optional().trim(),
  instagram: Yup.string()
    .test(
      'valid_instagram',
      'Digite um username do Instagram válido',
      (value) => {
        if (!value) return true

        if (value[0] !== '@') return false

        return true
      }
    )
    .optional()
    .trim(),
})
