import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import Input from 'packages/inputs/components/Input'
import PasswordInput from 'packages/inputs/components/PasswordInput'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { StyledForm } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'
import focusOnInput from 'packages/utils/focusOnInput'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { ContextUserSecrets, useSignUpContext } from '../context'
import checkEmailUnique from '../use-cases/email-exists'
import EmailExistsError from '../use-cases/EmailExistsError'
import { SignUpSecretsValidationSchema } from '../validators'

export interface SecretsProps {
  handleSubmit?: (data: ContextUserSecrets) => Promise<void>
  formRef?: React.RefObject<FormHandles>
}

const SignUpSecrets: React.FC<SecretsProps> = (props) => {
  const ref = useRef<FormHandles>(null)

  const formRef = props.formRef || ref

  const context = useSignUpContext()

  const router = useNavigation()

  const handleSubmit = async (data: ContextUserSecrets) => {
    try {
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(
        SignUpSecretsValidationSchema,
        data
      )

      await checkEmailUnique(validatedData.email)

      context.setSecrets(validatedData)

      router.navigate(SIGNUP_ROUTES.ABOUT)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      if (error instanceof EmailExistsError) {
        return formRef.current?.setFieldError('email', error.message)
      }

      return alertModal(error)
    }
  }

  const submitForm = () => formRef.current?.submitForm()

  return (
    <StackPageTemplate title="Cadastre-se">
      <StyledForm
        testID="form"
        ref={formRef}
        onSubmit={props.handleSubmit || handleSubmit}
        initialData={context.secrets}
      >
        <Input
          testID="email"
          label="E-mail"
          name="email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          onSubmitEditing={() => focusOnInput(formRef, 'password')}
        />

        <PasswordInput
          testID="password"
          label="Senha"
          name="password"
          onSubmitEditing={() => focusOnInput(formRef, 'confirm_password')}
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

export default SignUpSecrets
