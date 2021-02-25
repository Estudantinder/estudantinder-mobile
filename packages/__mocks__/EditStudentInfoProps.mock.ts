import { FormHandles } from '@unform/core'

import { EditStudentInfoProps } from 'packages/edit-student-info/EditStudentInfoProps'

import useRefMock from './useRef.mock'

export default <T>(): EditStudentInfoProps<T> => {
  return {
    formRef: useRefMock<FormHandles>(),
    handleSubmit: jest.fn(),
  }
}
