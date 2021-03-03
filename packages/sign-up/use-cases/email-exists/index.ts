import api from 'packages/api'

import EmailExistsError from './EmailExistsError'

export default async function EmailExistsUseCase(email: string): Promise<void> {
  try {
    await api.post('/users/emailValidation', { email })
  } catch (error) {
    if (error.response) {
      throw new EmailExistsError({
        title: error.response?.data.error || 'EMAIL INVÁLIDO',
        message:
          error.response?.data.message || 'O email já existe ou é inválido',
      })
    }

    throw error
  }
}
