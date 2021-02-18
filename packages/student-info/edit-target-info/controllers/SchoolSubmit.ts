import { RefObject } from 'react'

import { FormHandles } from '@unform/core'

import { StudentSchool } from 'packages/entities/Student'
import StudentSchoolSchema from 'packages/student-info/edit-target-info/validators/StudentSchoolSchema'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

export interface EditStudentSchoolSubmitProps {
  formRef: RefObject<FormHandles>
  onSubmitSuccess(data: StudentSchool): void
}

export default class EditStudentSchoolSubmit {
  public formRef
  public onSubmitSuccess

  constructor(props: EditStudentSchoolSubmitProps) {
    this.formRef = props.formRef
    this.onSubmitSuccess = props.onSubmitSuccess
  }

  async handle(data: StudentSchool) {
    try {
      // Remove all previous errors
      this.formRef.current?.setErrors({})

      const validatedData = await validateSchema(StudentSchoolSchema, data)

      this.onSubmitSuccess(validatedData)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        this.formRef.current?.setErrors(error.validationErrors)

        this.formRef.current?.setFieldError(
          'school',
          error.validationErrors['school.id']
        )

        this.formRef.current?.setFieldError(
          'course',
          error.validationErrors['course.id']
        )

        return
      }

      return alertModal(error)
    }
  }
}
