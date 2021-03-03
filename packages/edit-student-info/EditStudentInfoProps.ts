import { FormHandles } from '@unform/core'

export type EditStudentInfoProps<SubmitData> = {
  handleSubmit: (data: SubmitData) => Promise<void>
  formRef: React.RefObject<FormHandles>
  initialData?: SubmitData
}
