import { FormHandles } from '@unform/core'

export type EditTargetInfoProps<SubmitData> = {
  handleSubmit?: (data: SubmitData) => Promise<void>
  formRef?: React.RefObject<FormHandles>
  initialData?: SubmitData
  setData?: (data: SubmitData) => void
  onSubmitSuccess?: () => void
}
