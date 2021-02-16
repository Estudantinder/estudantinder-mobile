import { RefObject } from 'react'

import { FormHandles } from '@unform/core'

import Contacts from 'packages/entities/Contacts'
import StudentContactsSchema from 'packages/student-info/validators/StudentContactsSchema'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

export interface EditStudentContactsSubmitProps {
  formRef: RefObject<FormHandles>
  onSubmitSuccess(data: Contacts): void
}

export default class EditStudentContactsSubmit {
  public formRef
  public onSubmitSuccess

  constructor(props: EditStudentContactsSubmitProps) {
    this.formRef = props.formRef
    this.onSubmitSuccess = props.onSubmitSuccess
  }

  async handle(data: Contacts) {
    try {
      this.formRef.current?.setErrors({})

      const validatedData = await validateSchema(StudentContactsSchema, data)

      this.onSubmitSuccess(validatedData)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return this.formRef.current?.setErrors(error.validationErrors)
      }

      return alertModal(error)
    }
  }
}
