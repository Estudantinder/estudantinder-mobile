import * as Yup from 'yup'

import School from 'packages/entities/School'

import CourseSchema from './CourseSchema'

type SchoolKeys = Record<keyof School, Yup.AnySchema>

export default Yup.object().shape<SchoolKeys>({
  address: Yup.string().required(),
  courses: Yup.array(CourseSchema).min(1),
  id: Yup.string().required('Informe sua escola'),
  name: Yup.string().required(),
})
