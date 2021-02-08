import api from 'packages/api'

import EmailExistsError from './EmailExistsError'

export default async function checkEmailUnique(email: string): Promise<void> {
  try {
    await api.post('/users/emailValidation', { email })
  } catch (error) {
    throw new EmailExistsError(error.response.data.message)
  }
}
