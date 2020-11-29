import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import * as Yup from 'yup'

import Input from 'src/components/Input'
import { useSignUpContext } from 'src/context/sign-up'
import SecretsStyled from 'src/styles/pages/sign-up/Secrets.styled'
import ValidateSignUpSecret, {
  IValidateSignUpSecretData,
} from 'src/validators/sign-up/Secret'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { secrets, setSecrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

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

      if (err instanceof Yup.ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        return formRef?.current?.setErrors(validationErrors)
      }

      return alert(err)
    }
  }

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  return (
    <SecretsStyled.Container>
      <SecretsStyled.Header>
        <SecretsStyled.Title>Cadastre-se</SecretsStyled.Title>
      </SecretsStyled.Header>

      <SecretsStyled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={secrets}>
          <Input name="email" label="email" />
          <Input name="password" label="senha" />
          <Input name="confirm_password" label="confirmar senha" />
        </Form>
      </SecretsStyled.Main>

      <SecretsStyled.Footer>
        <SecretsStyled.Button onPress={() => formRef?.current?.submitForm()}>
          <SecretsStyled.ButtonText>Continuar</SecretsStyled.ButtonText>
        </SecretsStyled.Button>
      </SecretsStyled.Footer>
    </SecretsStyled.Container>
  )
}

export default Secrets
