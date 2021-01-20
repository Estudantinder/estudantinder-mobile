import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'

import { StatusBar } from 'expo-status-bar'

import LandingImage from 'views/assets/landing.png'
import Logo from 'views/assets/logo.png'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import { Container } from 'views/styles/globalStyles'

import Styled from './styles'

const Landing: React.FC = () => {
  const router = useNavigation()

  function handleNavigationToSignUp() {
    router.navigate('sign-up/Images')
  }

  function handleNavigationToLogin() {
    router.navigate('Login')
  }

  return (
    <Container style={{ backgroundColor: '#FBFBFB' }}>
      <StatusBar translucent />

      <Image source={Logo} />

      <Styled.ImageContainer>
        <Image source={LandingImage} />

        <Styled.Title>Crie novas conexões enquanto aprende!</Styled.Title>
      </Styled.ImageContainer>

      <Styled.ButtonsContainer>
        <PrimaryButton onPress={handleNavigationToSignUp}>
          Quero fazer parte!
        </PrimaryButton>

        <Styled.SignInButton
          onPress={handleNavigationToLogin}
          activeOpacity={0.8}
        >
          <Styled.SignInText>Já possui uma conta? Entre aqui</Styled.SignInText>
        </Styled.SignInButton>
      </Styled.ButtonsContainer>
    </Container>
  )
}

export default Landing
