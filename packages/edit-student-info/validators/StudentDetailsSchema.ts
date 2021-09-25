import * as Yup from 'yup'

import { StudentDetails } from 'packages/entities/Student'

type DetailsKeys = Record<keyof StudentDetails, Yup.AnySchema>

export default Yup.object().shape<DetailsKeys>({
  bio: Yup.string()
    .max(256, 'O máximo de caracteres é 256')
    .required('Digite sua biografia')
    .trim(),
  subjects: Yup.array()
    .test('length', 'Escolha 3 matérias', (value) => value?.length === 3)
    .required('Escolha 3 matérias'),
})
