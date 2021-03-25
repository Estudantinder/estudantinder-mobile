import AsyncStorage from '@react-native-async-storage/async-storage'

import { ONBOARDING_STORAGE_KEYS } from '../shared'

export default async function GetOnBoardingViewed() {
  const hasViewed = await AsyncStorage.getItem(ONBOARDING_STORAGE_KEYS.VIEWED)

  if (hasViewed === 'true') return false

  return false
}
