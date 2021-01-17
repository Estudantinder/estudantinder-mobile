import * as Yup from 'yup'

import Contacts from 'main/entities/Contacts'

import { DEFAULT_VALIDATION_OPTIONS } from 'shared/Constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type ContactsKeys = Record<keyof Contacts, unknown>

export default async function validateContactsData(data: Contacts) {
  try {
    const schema = Yup.object().shape<ContactsKeys>({
      whatsapp: Yup.string().optional(),
      twitter: Yup.string().optional(),
      facebook: Yup.string().optional(),
      instagram: Yup.string().optional(),
    })

    await schema.validate(data, DEFAULT_VALIDATION_OPTIONS)
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
