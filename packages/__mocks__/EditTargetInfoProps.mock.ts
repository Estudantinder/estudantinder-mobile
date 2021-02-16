import { FormHandles } from '@unform/core'

import { EditTargetInfoProps } from 'packages/student-info/edit-target-info/EditTargetInfoProps'

import useRefMock from './useRef.mock'

export default <T>(): EditTargetInfoProps<T> => {
  return {
    formRef: useRefMock<FormHandles>(),
    handleSubmit: jest.fn(),
  }
}
