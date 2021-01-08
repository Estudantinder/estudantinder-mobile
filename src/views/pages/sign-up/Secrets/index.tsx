import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import { useSignUpContext } from 'main/context/sign-up'
import ValidateSignUpSecret, {
  IValidateSignUpSecretData,
} from 'main/validators/sign-up/Secret'

import Input from 'views/components/atoms/Input'
import PasswordInput from 'views/components/atoms/PasswordInput'
import Footer from 'views/components/organisms/Footer'
import Header from 'views/components/organisms/Header'

import Styled from './styles'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { setSecrets, secrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  function onButtonPress() {
    formRef.current?.submitForm()
  }

  async function handleSubmit(data: IValidateSignUpSecretData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateSignUpSecret(data)

      await schema.validate(data, {
        abortEarly: false,
      })

      setSecrets({ email: data.email, password: data.password })

      handleNavigateToPerson()
    } catch (err) {
      const validationErrors: Record<string, string> = {}

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        return formRef?.current?.setErrors(validationErrors)
      }

      return alert(err)
    }
  }

  return (
    <Styled.Container behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Header title="Cadastre-se" />

      <Styled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={secrets}>
          <Input
            name="email"
            label="email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <PasswordInput name="password" label="senha" />

          <PasswordInput name="confirm_password" label="Confirmar senha" />
        </Form>
      </Styled.Main>

      <Footer onPress={onButtonPress} buttonTitle="Continuar" />
    </Styled.Container>
  )
}

export default Secrets
