import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import Input from 'packages/inputs/components/Input'
import PasswordInput from 'packages/inputs/components/PasswordInput'
import { StyledForm } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { ContextUserSecrets, useSignUpContext } from '../context'
import checkEmailUnique from '../use-cases/email-exists'
import EmailExistsError from '../use-cases/EmailExistsError'
import { SignUpSecretsValidationSchema } from '../validators'

const Secrets: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const context = useSignUpContext()

  const handleSubmit = async (data: ContextUserSecrets) => {
    try {
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(
        SignUpSecretsValidationSchema,
        data
      )

      await checkEmailUnique(validatedData.email)

      context.setSecrets(validatedData)
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

  const focusOnInput = (inputName: string) => {
    const inputRef = formRef.current?.getFieldRef(inputName)

    inputRef.focus()
  }

  return (
    <StackPageTemplate title="Cadastre-se">
      <StyledForm
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={context.secrets}
      >
        <Input
          label="E-mail"
          name="email"
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          onSubmitEditing={() => focusOnInput('password')}
        />

        <PasswordInput
          label="Senha"
          name="password"
          onSubmitEditing={() => focusOnInput('confirm_password')}
        />

        <PasswordInput
          label="Confirme sua senha"
          name="confirm_password"
          onSubmitEditing={submitForm}
          returnKeyType="done"
          blurOnSubmit
        />
      </StyledForm>

      <PrimaryButton onPress={submitForm}>CONTINUAR</PrimaryButton>
    </StackPageTemplate>
  )
}

export default Secrets
