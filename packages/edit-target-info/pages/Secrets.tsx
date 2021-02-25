import React from 'react'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { UserSecrets } from 'packages/entities/User'
import Input from 'packages/inputs/components/Input'
import PasswordInput from 'packages/inputs/components/PasswordInput'
import { StyledForm } from 'packages/styles'
import focusOnInput from 'packages/utils/focusOnInput'

import { EditTargetInfoProps } from '../EditTargetInfoProps'

export interface ContextUserSecrets extends UserSecrets {
  confirm_password: string
}

type EditStudentSecrets = EditTargetInfoProps<ContextUserSecrets> & {
  title?: string
  fixedEmail?: boolean
}

const EditStudentSecrets: React.FC<EditStudentSecrets> = (props) => {
  const submitForm = () => props.formRef.current?.submitForm()

  return (
    <StackPageTemplate title={props.title || 'Segredos'}>
      <StyledForm
        ref={props.formRef}
        onSubmit={props.handleSubmit}
        initialData={props.initialData}
      >
        <Input
          testID="email"
          label="E-mail"
          name="email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          onSubmitEditing={() => focusOnInput(props.formRef, 'password')}
          editable={!props.fixedEmail}
        />

        <PasswordInput
          testID="password"
          label="Senha"
          name="password"
          onSubmitEditing={() =>
            focusOnInput(props.formRef, 'confirm_password')
          }
        />

        <PasswordInput
          testID="confirm-password"
          label="Confirme sua senha"
          name="confirm_password"
          onSubmitEditing={submitForm}
          returnKeyType="done"
          blurOnSubmit
        />
      </StyledForm>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentSecrets
