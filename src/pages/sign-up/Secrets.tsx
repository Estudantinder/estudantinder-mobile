import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { useSignUpContext } from 'src/context/sign-up'
import SecretsStyled from 'src/styles/pages/sign-up/Secrets.styled'

interface FormData {
  email: string
  password: string
  confirm_password: string
}

const Secrets: React.FC = () => {
  const router = useNavigation()

  const { secrets, setSecrets } = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: FormData) {
    setSecrets({ email: data.email, password: data.password })

    handleNavigateToPerson()
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
