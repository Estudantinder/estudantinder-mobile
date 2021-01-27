import * as Yup from 'yup'

import Course from 'main/entities/Course'

export default Yup.object().shape<Course>({
  id: Yup.string().required(),
  name: Yup.string().required(),
})
