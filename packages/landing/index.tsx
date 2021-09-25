import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Image } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'
import { UnauthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/unauthenticated'
import { PageContainer } from 'packages/styles'

import LandingImage from './assets/landing.png'
import Logo from './assets/logo.png'
import Styled from './landing.styles'

type PageProps = NativeStackScreenProps<
  UnauthenticatedNavigationPagesParamsProps,
  typeof UNAUTHENTICATED_ROUTES.LANDING
>

type Navigation = PageProps['navigation']

const Landing: React.FC = () => {
  const router = useNavigation<Navigation>()

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
