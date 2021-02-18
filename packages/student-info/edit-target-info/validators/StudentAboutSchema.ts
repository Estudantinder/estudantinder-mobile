import * as Yup from 'yup'

import { StudentAbout } from 'packages/entities/Student'

type AboutKeys = Record<keyof StudentAbout, unknown>

const ACTUAL_YEAR = new Date().getFullYear()

export const STUDENT_ABOUT_SCHEMA_MAX_DATE = new Date(
  `12/31/${ACTUAL_YEAR - 12}`
)

export const STUDENT_ABOUT_SCHEMA_MIN_DATE = new Date(`1/1/${ACTUAL_YEAR - 21}`)

export default Yup.object().shape<AboutKeys>({
  name: Yup.string().required('Digite seu nome completo').trim(),
  birth_date: Yup.date()
    .min(STUDENT_ABOUT_SCHEMA_MIN_DATE)
    .max(STUDENT_ABOUT_SCHEMA_MAX_DATE)
    .required('Informe sua data de nascimento'),
  gender: Yup.string().optional().trim(),
})
