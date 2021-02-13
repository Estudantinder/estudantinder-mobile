import * as Yup from 'yup'

import { SHIFTS } from 'packages/entities/Shift'
import { StudentSchool } from 'packages/entities/Student'
import CourseSchema from 'packages/validation/schemas/CourseSchema'
import SchoolSchema from 'packages/validation/schemas/SchoolSchema'

type StudentSchoolKeys = Record<keyof StudentSchool, unknown>

export default Yup.object().shape<StudentSchoolKeys>({
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
