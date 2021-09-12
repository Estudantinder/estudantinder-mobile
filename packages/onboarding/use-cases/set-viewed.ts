import AsyncStorage from '@react-native-async-storage/async-storage'

import { ONBOARDING_STORAGE_KEYS } from '../shared'

export default async function SetOnboardingViewedUseCase(viewed = true) {
  await AsyncStorage.setItem(ONBOARDING_STORAGE_KEYS.VIEWED, viewed.toString())
}
