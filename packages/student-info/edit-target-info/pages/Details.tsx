import React from 'react'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { StudentDetails } from 'packages/entities/Student'
import { StyledForm } from 'packages/styles'

import SubjectsPicker from '../../../components/SubjectsPicker'
import { TextAreaInput } from '../edit-target-info.styles'
import { EditTargetInfoProps } from '../EditTargetInfoProps'

export type EditStudentDetailsProps = EditTargetInfoProps<StudentDetails>

const EditStudentDetails: React.FC<EditStudentDetailsProps> = (props) => {
  const submitForm = () => props.formRef.current?.submitForm()

  return (
    <StackPageTemplate title="Um pouco sobre você">
      <StyledForm
        ref={props.formRef}
        onSubmit={props.handleSubmit}
        initialData={props.initialData}
      >
        <TextAreaInput
          testID="bio"
          name="bio"
          label="Biografia"
          info="Máximo de 256 caracteres"
          maxLength={256}
          textAlignVertical="top"
          multiline
        />

        <SubjectsPicker label="Escolha 03 matérias que você tem afinidade" />
      </StyledForm>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentDetails
