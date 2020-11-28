import { useNavigation } from '@react-navigation/native'
import React from 'react'

import LandingStyled from '../styles/pages/Landing.styled'

const Landing: React.FC = () => {
  const router = useNavigation()

  function handleNavigationToSignUp() {
    router.navigate('sign-up/Secrets')
  }

  return (
    <LandingStyled.Container>
      <LandingStyled.Main>
        <LandingStyled.Title>
          Crie nova conexões enquanto aprende
        </LandingStyled.Title>
      </LandingStyled.Main>

      <LandingStyled.Footer>
        <LandingStyled.SignUpButton onPress={handleNavigationToSignUp}>
          <LandingStyled.SignUpText>
            Quero fazer parte!
          </LandingStyled.SignUpText>
        </LandingStyled.SignUpButton>

        <LandingStyled.SignInButton>
          <LandingStyled.SignInText>
            Já possui uma conta? Entre aqui
          </LandingStyled.SignInText>
        </LandingStyled.SignInButton>
      </LandingStyled.Footer>
    </LandingStyled.Container>
  )
}

export default Landing
