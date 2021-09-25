import * as Yup from 'yup'

import Course from 'packages/entities/Course'

type CourseSchema = Record<keyof Course, Yup.AnySchema>

export default Yup.object().shape<CourseSchema>({
  id: Yup.string().required('Informe seu curso'),
  name: Yup.string().required(),
})
