import AsyncStorage from '@react-native-async-storage/async-storage'

import { STORAGE_AUTH_TOKEN } from 'shared/Constants'

export default async function deleteAuthToken() {
  AsyncStorage.removeItem(STORAGE_AUTH_TOKEN.EXPIRATION_KEY)
  await AsyncStorage.removeItem(STORAGE_AUTH_TOKEN.TOKEN_KEY)
}
