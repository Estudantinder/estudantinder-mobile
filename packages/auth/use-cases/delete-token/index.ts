import AsyncStorage from '@react-native-async-storage/async-storage'

import api from 'packages/api'
import { STORAGE_AUTH_TOKEN } from 'packages/auth/shared'

export default async function DeleteAuthTokenUseCase() {
  AsyncStorage.removeItem(STORAGE_AUTH_TOKEN.EXPIRATION_KEY)
  await AsyncStorage.removeItem(STORAGE_AUTH_TOKEN.TOKEN_KEY)

  api.defaults.headers.authorization = undefined
}
