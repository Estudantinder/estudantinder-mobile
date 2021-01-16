import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { CreateUserTokenData } from 'main/use-cases/create-user-token/interfaces'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import Input from 'views/components/atoms/Input'
import PasswordInput from 'views/components/atoms/PasswordInput'
import SwitchInput from 'views/components/atoms/SwitchInput'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import setValidationErrors from 'shared/setValidationErrors'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: CreateUserTokenData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      console.log(data)
    } catch (err) {
      if (err instanceof ValidationError) {
        return setValidationErrors(err, formRef)
      }

      return alert(err)
    }
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Informações da Conta</FormTitle>

        <SignUpForm ref={formRef} onSubmit={handleSubmit}>
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
        </SignUpForm>

        <FormButton onPress={handleButtonPress} title="CONTINUAR" />
      </FormMain>
    </SignUpContainer>
  )
}

export default Login
