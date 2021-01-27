import { OptionsItem } from './interfaces'

export enum SHIFTS {
  MORNING = 1,
  AFTERNOON = 2,
}

export enum GENDERS_ENUM {
  FEMALE = 0,
  MALE = 1,
}

export const STORAGE_AUTH_TOKEN = {
  TOKEN_KEY: 'auth_token',
  EXPIRATION_KEY: 'auth_token_expiration_date',
}

export const STORAGE_SCHOOLS = 'api_schools'

export const SCHOOL_YEARS_ITEMS: OptionsItem[] = [
  { label: '1º ano', value: '1' },
  { label: '2º ano', value: '2' },
  { label: '3º ano', value: '3' },
]

export const SHIFTS_ITEMS: OptionsItem[] = [
  { label: 'Manhã', value: String(SHIFTS.MORNING) },
  { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
]
