import * as Yup from 'yup'

import Course from 'packages/entities/Course'

export default Yup.object().shape<Course>({
  id: Yup.string().required('Informe seu curso'),
  name: Yup.string().required(),
})
