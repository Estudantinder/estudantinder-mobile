import * as Yup from 'yup'

import School from 'main/entities/School'

import CourseSchema from './CourseSchema'

export type SchoolKeys = Record<keyof School, unknown>

export default Yup.object().shape<SchoolKeys>({
  address: Yup.string().required(),
  courses: Yup.array(CourseSchema).min(1).required(),
  id: Yup.string().required(),
  name: Yup.string().required(),
})
