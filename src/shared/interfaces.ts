import { GENDERS_ENUM } from './constants'

export type Gender = GENDERS_ENUM | string

export interface OptionsItem {
  label: string
  value: string
}
