import { useNavigation } from '@react-navigation/native'
import React from 'react'

import Styled from './styles'

const Landing: React.FC = () => {
  const router = useNavigation()

  function handleNavigationToSignUp() {
    router.navigate('sign-up/Secrets')
  }

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Title>Crie nova conexões enquanto aprende</Styled.Title>
      </Styled.Main>

      <Styled.Footer>
        <Styled.SignUpButton onPress={handleNavigationToSignUp}>
          <Styled.SignUpText>Quero fazer parte!</Styled.SignUpText>
        </Styled.SignUpButton>

        <Styled.SignInButton>
          <Styled.SignInText>Já possui uma conta? Entre aqui</Styled.SignInText>
        </Styled.SignInButton>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Landing
