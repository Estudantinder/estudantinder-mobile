import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { StudentAbout } from 'packages/entities/Student'
import Input from 'packages/inputs/components/Input'
import { StyledForm } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import StudentAboutSchema from '../../validators/StudentAboutSchema'
import BirthDatePicker from '../components/BirthDatePicker'
import GenderPicker from '../components/GenderPicker'
import { EditTargetInfoProps } from '../EditTargetInfoProps'

type EditStudentAboutProps = EditTargetInfoProps<StudentAbout>

const EditStudentAbout: React.FC<EditStudentAboutProps> = (props) => {
  const ref = useRef<FormHandles>(null)

  const formRef = props.formRef || ref

  const handleSubmit = async (data: StudentAbout) => {
    try {
      formRef.current?.setErrors({})

      const validatedData = await validateSchema(StudentAboutSchema, data)

      props.setData?.(validatedData)

      props.onSubmitSuccess?.()
    } catch (error) {
      if (error instanceof UnformValidationError) {
        formRef.current?.setErrors(error.validationErrors)

        const genderError = formRef.current?.getFieldError('gender')

        if (genderError) {
          formRef.current?.setFieldError('custom_gender', genderError)
        }

        return
      }

      return alertModal(error)
    }
  }

  const submitForm = () => formRef.current?.submitForm()

  return (
    <StackPageTemplate title="Suas informações">
      <StyledForm
        ref={formRef}
        onSubmit={props.handleSubmit || handleSubmit}
        initialData={props.initialData}
      >
        <Input
          testID="name"
          name="name"
          label="Nome Completo"
          onSubmitEditing={() => {
            formRef.current?.getFieldRef('birth_date').focus()
          }}
          blurOnSubmit
        />

        <BirthDatePicker />

        <GenderPicker />
      </StyledForm>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentAbout
