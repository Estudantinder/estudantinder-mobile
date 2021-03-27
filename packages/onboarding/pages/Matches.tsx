import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'

import Matches from '../assets/matches.png'
import { useOnBoardingContext } from '../context'
import {
  OnBoardingPageContainer,
  OnBoardingPageSubTitle,
  OnBoardingPageTitle,
} from '../onboarding.styles'

const OnBoardingMatchesPage: React.FC = () => {
  const { endOnBoarding } = useOnBoardingContext()

  const router = useNavigation()

  const handleEndOnboarding = async () => {
    await endOnBoarding()

    router.navigate(UNAUTHENTICATED_ROUTES.LANDING)
  }

  return (
    <OnBoardingPageContainer>
      <Image source={Matches} />
      <OnBoardingPageTitle>
        Acesse os matches para fazer cada vez mais conexões!
      </OnBoardingPageTitle>
      <OnBoardingPageSubTitle>
        Na tela Matches ficarão todos os alunos que também curtiram o seu perfil
        e gostariam de estudar junto com você, e assim, vocês podem acessar os
        contatos um do outro.
      </OnBoardingPageSubTitle>

      <PrimaryButton onPress={handleEndOnboarding}>COMEÇAR!</PrimaryButton>
    </OnBoardingPageContainer>
  )
}

export default OnBoardingMatchesPage
