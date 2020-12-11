import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useSignUpContext } from 'src/context/sign-up'
import ValidateSignUpSecret, {
  IValidateSignUpSecretData,
} from 'src/validators/sign-up/Secret'
import SignUpSecretsForm from 'src/views/sign-up/Secrets/components/Form'
import SecretsStyled from 'src/views/sign-up/Secrets/styles/Secrets.styled'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { setSecrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  function onButtonPress() {
    formRef.current?.submitForm
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
    <SecretsStyled.Container
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header title="Cadastre-se" />

      <SecretsStyled.Main>
        <SignUpSecretsForm ref={formRef} onSubmit={handleSubmit} />
      </SecretsStyled.Main>

      <Footer onPress={onButtonPress} buttonTitle="Continuar" />
    </SecretsStyled.Container>
  )
}

export default Secrets
