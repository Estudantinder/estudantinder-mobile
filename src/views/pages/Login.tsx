import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { useAuthContext } from 'main/context/auth'
import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'
import validateAuthTokenData from 'main/use-cases/create-auth-token/validation/AuthTokenData'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import SwitchInput from 'views/components/atoms/SwitchInput'
import Input from 'views/components/molecules/Input'
import PasswordInput from 'views/components/molecules/PasswordInput'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import FormattedValidationError from 'shared/FormattedValidationError'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const router = useNavigation()

  const { signIn } = useAuthContext()

  async function handleSubmit(data: CreateAuthTokenData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      await validateAuthTokenData(data)

      await signIn(data)

      return router.navigate('Home')
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return triggerCorrectAlert(error)
    }
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <FormPageTemplate title="Informações da Conta">
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

      <PrimaryButton onPress={handleButtonPress}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default Login
