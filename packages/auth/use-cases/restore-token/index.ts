import AsyncStorage from '@react-native-async-storage/async-storage'

import api from 'packages/api'
import { STORAGE_AUTH_TOKEN } from 'packages/auth/shared'

export default async function RestoreAuthTokenUseCase(): Promise<
  string | null
> {
  const storageToken = await AsyncStorage.getItem(STORAGE_AUTH_TOKEN.TOKEN_KEY)

  const expirationValue = await AsyncStorage.getItem(
    STORAGE_AUTH_TOKEN.EXPIRATION_KEY
  )

  if (!storageToken || !expirationValue) {
    AsyncStorage.multiRemove([
      STORAGE_AUTH_TOKEN.EXPIRATION_KEY,
      STORAGE_AUTH_TOKEN.TOKEN_KEY,
    ])

    return null
  }

  api.defaults.headers.authorization = `Bearer ${storageToken}`

  try {
    await api.post('/users/jwtValidation')

    return storageToken
  } catch (error) {
    api.defaults.headers.authorization = undefined

    AsyncStorage.multiRemove([
      STORAGE_AUTH_TOKEN.EXPIRATION_KEY,
      STORAGE_AUTH_TOKEN.TOKEN_KEY,
    ])

    return null
  }
}
