import { RefObject } from 'react'

import { FormHandles } from '@unform/core'

import { StudentAbout } from 'packages/entities/Student'
import StudentAboutSchema from 'packages/student-info/edit-target-info/validators/StudentAboutSchema'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

export interface EditStudentAboutSubmitProps {
  formRef: RefObject<FormHandles>
  onSubmitSuccess(data: StudentAbout): void
}

export default class EditStudentAboutSubmit {
  formRef
  onSubmitSuccess

  constructor(props: EditStudentAboutSubmitProps) {
    this.formRef = props.formRef
    this.onSubmitSuccess = props.onSubmitSuccess
  }

  async handle(data: StudentAbout) {
    try {
      this.formRef.current?.setErrors({})

      const validatedData = await validateSchema(StudentAboutSchema, data)

      this.onSubmitSuccess(validatedData)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        this.formRef.current?.setErrors(error.validationErrors)

        const genderError = this.formRef.current?.getFieldError('gender')

        if (genderError) {
          this.formRef.current?.setFieldError('custom_gender', genderError)
        }

        return
      }

      return alertModal(error)
    }
  }
}
