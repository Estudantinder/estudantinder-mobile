import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { ISecrets, useSignUpContext } from 'main/context/sign-up'
import validateUserSecretsData from 'main/use-cases/create-user/validation/UserSecrets'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import Input from 'views/components/atoms/Input'
import PasswordInput from 'views/components/atoms/PasswordInput'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { setSecrets, secrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  function onFormButtonPress() {
    formRef.current?.submitForm()
  }

  async function handleSubmit(data: ISecrets) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      await validateUserSecretsData(data)

      setSecrets(data)

      handleNavigateToPerson()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alert(error)
    }
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Cadastre-se</FormTitle>

        <SignUpForm ref={formRef} onSubmit={handleSubmit} initialData={secrets}>
          <Input
            name="email"
            label="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            onSubmitEditing={() =>
              formRef.current?.getFieldRef('password').focus()
            }
          />

          <PasswordInput
            name="password"
            label="Senha"
            onSubmitEditing={() =>
              formRef.current?.getFieldRef('confirm_password').focus()
            }
          />

          <PasswordInput
            name="confirm_password"
            label="Confirmar senha"
            returnKeyType="done"
            onSubmitEditing={onFormButtonPress}
            blurOnSubmit
          />
        </SignUpForm>

        <FormButton title="CONTINUAR" onPress={onFormButtonPress} />
      </FormMain>
    </SignUpContainer>
  )
}

export default Secrets
