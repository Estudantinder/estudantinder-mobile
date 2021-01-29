import * as Yup from 'yup'

import {
  StudentAbout,
  StudentDetails,
  StudentSchool,
} from 'main/entities/Student'

import { SHIFTS } from 'shared/constants'

import CourseSchema from './CourseSchema'
import SchoolSchema from './SchoolSchema'

type PersonKeys = Record<keyof StudentAbout, unknown>

type DetailsKeys = Record<keyof StudentDetails, unknown>

type SchoolKeys = Record<keyof StudentSchool, unknown>

export const StudentAboutSchema = Yup.object().shape<PersonKeys>({
  name: Yup.string().required('Digite seu nome completo'),
  birth_date: Yup.string().required('Informe sua data de nascimento'),
  gender: Yup.string().optional(),
})

export const StudentDetailsSchema = Yup.object().shape<DetailsKeys>({
  bio: Yup.string()
    .max(256, 'O máximo de caracteres é 256')
    .required('Digite sua biografia')
    .trim(),
  subjects: Yup.array()
    .min(1, 'Escolha 3 matérias')
    .max(3, 'Escolha somente 3 matérias')
    .required('Escolha 3 matérias'),
})

export const StudentSchoolSchema = Yup.object().shape<SchoolKeys>({
  school: SchoolSchema.required(),
  course: CourseSchema.required(),
  school_year: Yup.number()
    .oneOf([1, 2, 3], 'Informe sua série')
    .required('Informe sua série'),
  shift: Yup.number()
    .oneOf([SHIFTS.MORNING, SHIFTS.AFTERNOON], 'Informe seu turno')
    .required('Informe seu turno'),
  classroom: Yup.string()
    .max(1, 'A sala precisa ter somente 1 carácter')
    .required('Informe sua sala'),
})
