import AsyncStorage from '@react-native-async-storage/async-storage'

import { ThemeNames } from '../styled'
import { USER_THEME_KEY } from './constants'

export default async function SetUserThemeUseCase(theme: ThemeNames) {
  await AsyncStorage.setItem(USER_THEME_KEY, theme)
}
