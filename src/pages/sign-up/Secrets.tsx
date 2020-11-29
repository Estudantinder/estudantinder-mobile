import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import SecretsStyled from 'src/styles/pages/sign-up/Secrets.styled'

const Secrets: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  function handleSubmit(data: unknown) {
    console.log(data)

    // eslint-disable-next-line no-constant-condition
    if (false) {
      handleNavigateToPerson()
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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" label="email" />
          <Input name="senha" label="senha" />
          <Input name="confirmar senha" label="confirmar senha" />
        </Form>
      </SecretsStyled.Main>

      <SecretsStyled.Footer>
        <SecretsStyled.Button onPress={() => formRef!.current!.submitForm()}>
          <SecretsStyled.ButtonText>Continuar</SecretsStyled.ButtonText>
        </SecretsStyled.Button>
      </SecretsStyled.Footer>
    </SecretsStyled.Container>
  )
}

export default Secrets
