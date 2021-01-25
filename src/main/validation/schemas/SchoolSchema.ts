import * as Yup from 'yup'

import School from 'main/entities/School'

import CourseSchema from './CourseSchema'

export type SchoolKeys = Record<keyof School, unknown>

export default Yup.object().shape<SchoolKeys>({
  address: Yup.string(),
  courses: Yup.array(CourseSchema).min(1),
  id: Yup.string(),
  name: Yup.string(),
})
