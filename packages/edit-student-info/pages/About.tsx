import React from 'react'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { StudentAbout } from 'packages/entities/Student'
import Input from 'packages/inputs/components/Input'
import { StyledForm } from 'packages/styles'

import BirthDatePicker from '../components/BirthDatePicker'
import GenderPicker from '../components/GenderPicker'
import { EditStudentInfoProps } from '../EditStudentInfoProps'

type EditStudentAboutProps = EditStudentInfoProps<StudentAbout>

const EditStudentAbout: React.FC<EditStudentAboutProps> = (props) => {
  const submitForm = () => props.formRef.current?.submitForm()

  return (
    <StackPageTemplate title="Suas informações">
      <StyledForm
        ref={props.formRef}
        onSubmit={props.handleSubmit}
        initialData={props.initialData}
      >
        <Input
          testID="name"
          name="name"
          label="Nome Completo"
          onSubmitEditing={() => {
            props.formRef.current?.getFieldRef('birth_date').focus()
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
