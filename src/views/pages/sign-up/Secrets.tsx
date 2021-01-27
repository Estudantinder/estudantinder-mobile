import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { ISecrets, useSignUpContext } from 'main/context/sign-up'
import checkEmailUnique from 'main/use-cases/check-email-unique'
import EmailExistsError from 'main/use-cases/check-email-unique/EmailExistsError'
import validateSchema from 'main/validation'
import UserSecretsSchema from 'main/validation/schemas/UserSecretsSchema'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Input from 'views/components/molecules/Input'
import PasswordInput from 'views/components/molecules/PasswordInput'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { setSecrets, secrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  function onPressSubmit() {
    formRef.current?.submitForm()
  }

  async function handleSubmit(data: ISecrets) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(UserSecretsSchema, data)

      await checkEmailUnique(validatedData.email)

      setSecrets(validatedData)

      handleNavigateToPerson()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      if (error instanceof EmailExistsError) {
        return formRef.current?.setFieldError('email', 'EMAIL JÁ EXISTE')
      }

      return alert(error)
    }
  }

  return (
    <FormPageTemplate title="Cadastre-se">
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
          onSubmitEditing={onPressSubmit}
          blurOnSubmit
        />
      </SignUpForm>

      <PrimaryButton onPress={onPressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default Secrets
