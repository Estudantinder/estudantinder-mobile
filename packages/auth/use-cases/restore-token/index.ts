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

  const expirationDate = new Date(expirationValue)

  const HOUR_IN_MILLISECONDS = 60000

  if (Date.now() - HOUR_IN_MILLISECONDS >= expirationDate.getTime()) {
    return null
  }

  api.defaults.headers.authorization = `Bearer ${storageToken}`

  return storageToken
}
