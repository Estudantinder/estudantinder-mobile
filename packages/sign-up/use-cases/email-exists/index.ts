import api from 'packages/api'

import EmailExistsError from './EmailExistsError'

export default async function EmailExistsUseCase(email: string): Promise<void> {
  try {
    await api.post('/users/emailValidation', { email })
  } catch (error) {
    if (error.response) {
      throw new EmailExistsError(error.response)
    }

    throw error
  }
}
