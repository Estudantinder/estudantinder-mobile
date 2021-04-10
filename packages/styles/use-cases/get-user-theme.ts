import AsyncStorage from '@react-native-async-storage/async-storage'

import { ThemeNames } from '../styled'
import { USER_THEME_KEY } from './constants'

export default async function GetUserThemeUseCase(): Promise<ThemeNames | null> {
  return AsyncStorage.getItem(USER_THEME_KEY) as Promise<ThemeNames | null>
}
