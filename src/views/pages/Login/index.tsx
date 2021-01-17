import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { useAuthContext } from 'main/context/auth'
import { CreateAuthTokenData } from 'main/use-cases/create-auth-token/interfaces'
import ValidateLogin from 'main/validators/Login'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import Input from 'views/components/atoms/Input'
import PasswordInput from 'views/components/atoms/PasswordInput'
import SwitchInput from 'views/components/atoms/SwitchInput'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import setValidationErrors from 'shared/setValidationErrors'
import triggerCorrectAlert from 'shared/triggerCorrectAlert'

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const router = useNavigation()

  const { signIn } = useAuthContext()

  async function handleSubmit(data: CreateAuthTokenData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateLogin()

      await schema.validate(data, { abortEarly: false })

      await signIn(data)

      return router.navigate('Home')
    } catch (err) {
      if (err instanceof ValidationError) {
        return setValidationErrors(err, formRef)
      }

      return triggerCorrectAlert(err)
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
