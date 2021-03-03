import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'

import LandingImage from './assets/landing.png'
import Logo from './assets/logo.png'
import Styled from './landing.styles'

const Landing: React.FC = () => {
  const router = useNavigation()

  function handleNavigationToSignUp() {
    router.navigate(UNAUTHENTICATED_ROUTES.SIGNUP)
  }

  function handleNavigationToLogin() {
    router.navigate(UNAUTHENTICATED_ROUTES.LOGIN)
  }

  return (
    <PageContainer style={{ paddingBottom: 16 }}>
      <Image source={Logo} />

      <Image source={LandingImage} />

      <Styled.LandingTitle>
        Crie novas conexões enquanto aprende!!
      </Styled.LandingTitle>

      <Styled.LandingButtonsContainer>
        <PrimaryButton
          testID="signup-button"
          onPress={handleNavigationToSignUp}
        >
          Quero fazer parte!
        </PrimaryButton>

        <Styled.SignInButton
          testID="login-button"
          onPress={handleNavigationToLogin}
          activeOpacity={0.8}
        >
          <Styled.SignInText>Já possui uma conta? Entre aqui</Styled.SignInText>
        </Styled.SignInButton>
      </Styled.LandingButtonsContainer>
    </PageContainer>
  )
}

export default Landing
