import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import Input from 'packages/inputs/components/Input'
import PasswordInput from 'packages/inputs/components/PasswordInput'
import SwitchInput from 'packages/inputs/components/SwitchInput'
import { StyledForm } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { useAuthContext } from '../context'
import { CreateAuthTokenData } from '../use-cases/create-token'
import AuthTokenDataSchema from '../validators/AuthTokenDataSchema'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { signIn } = useAuthContext()

  async function handleSubmit(data: CreateAuthTokenData) {
    try {
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(AuthTokenDataSchema, data)

      await signIn(validatedData)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alertModal(error)
    }
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <StackPageTemplate title="Informações da Conta">
      <StyledForm ref={formRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          label="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('password').focus()
          }
        />

        <PasswordInput
          name="password"
          label="Senha"
          returnKeyType="done"
          blurOnSubmit
        />

        <SwitchInput name="stay_logged" label="Desejo permanecer logado." />
      </StyledForm>

      <PrimaryButton onPress={handleButtonPress}>CONTINUAR</PrimaryButton>
    </StackPageTemplate>
  )
}

export default Login
