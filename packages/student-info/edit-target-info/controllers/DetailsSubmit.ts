import { RefObject } from 'react'

import { FormHandles } from '@unform/core'

import { StudentDetails } from 'packages/entities/Student'
import StudentDetailsSchema from 'packages/student-info/validators/StudentDetailsSchema'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

export interface EditStudentDetailsSubmitProps {
  formRef: RefObject<FormHandles>
  onSubmitSuccess(data: StudentDetails): void
}

export default class EditStudentDetailsSubmit {
  public formRef
  public onSubmitSuccess

  constructor(props: EditStudentDetailsSubmitProps) {
    this.formRef = props.formRef
    this.onSubmitSuccess = props.onSubmitSuccess
  }

  async handle(data: StudentDetails) {
    try {
      // Remove all previous errors
      this.formRef?.current?.setErrors({})

      const validatedData = await validateSchema(StudentDetailsSchema, data)

      this.onSubmitSuccess(validatedData)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return this.formRef.current?.setErrors(error.validationErrors)
      }

      return alertModal(error)
    }
  }
}
