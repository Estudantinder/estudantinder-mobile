import AsyncStorage from '@react-native-async-storage/async-storage'

import { ONBOARDING_STORAGE_KEYS } from '../shared'

export default async function SetOnboardingAsViewedUseCase() {
  await AsyncStorage.setItem(ONBOARDING_STORAGE_KEYS.VIEWED, 'true')
}
