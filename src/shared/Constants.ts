import { ValidateOptions } from 'yup'

export enum SHIFTS {
  MORNING = 1,
  AFTERNOON = 2,
}

export enum GENDERS_ENUM {
  FEMALE = 0,
  MALE = 1,
}

export type Gender = GENDERS_ENUM | string

export const STORAGE_AUTH_TOKEN = {
  TOKEN_KEY: 'auth_token',
  EXPIRATION_KEY: 'auth_token_expiration_date',
}

export const DEFAULT_VALIDATION_OPTIONS: ValidateOptions = {
  abortEarly: false,
}
