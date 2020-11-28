import { useNavigation } from '@react-navigation/native'
import React from 'react'

import SecretsStyled from '../../styles/pages/sign-up/Secrets.styled'

const Secrets: React.FC = () => {
  const router = useNavigation()

  function handleNavigateToPerson() {
    router.navigate('sign-up/Person')
  }

  return (
    <SecretsStyled.Container>
      <SecretsStyled.Header>
        <SecretsStyled.Title>Cadastre-se</SecretsStyled.Title>
      </SecretsStyled.Header>

      <SecretsStyled.Main>
        <SecretsStyled.Input placeholder="email" />
        <SecretsStyled.Input placeholder="senha" />
        <SecretsStyled.Input placeholder="confirmar senha" />
      </SecretsStyled.Main>

      <SecretsStyled.Footer>
        <SecretsStyled.Button onPress={handleNavigateToPerson}>
          <SecretsStyled.ButtonText>Continuar</SecretsStyled.ButtonText>
        </SecretsStyled.Button>
      </SecretsStyled.Footer>
    </SecretsStyled.Container>
  )
}

export default Secrets
