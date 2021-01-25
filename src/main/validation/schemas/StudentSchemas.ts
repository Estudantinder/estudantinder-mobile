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
  name: Yup.string().required(),
  birth_date: Yup.string().required(),
  gender: Yup.string().optional(),
})

export const StudentDetailsSchema = Yup.object().shape<DetailsKeys>({
  bio: Yup.string().max(256).required(),
  subjects: Yup.array().min(1).max(3).required(),
})

export const StudentSchoolSchema = Yup.object().shape<SchoolKeys>({
  school_year: Yup.number().oneOf([1, 2, 3]).required(),
  shift: Yup.number().oneOf([SHIFTS.MORNING, SHIFTS.AFTERNOON]).required(),
  classroom: Yup.string().max(1).required(),
  course: CourseSchema,
  school: SchoolSchema,
})
