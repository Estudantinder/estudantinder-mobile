import React from 'react'
import { Image } from 'react-native'

import Matches from '../assets/matches.png'
import {
  OnBoardingPageContainer,
  OnBoardingPageSubTitle,
  OnBoardingPageTitle,
} from '../onboarding.styles'

const OnBoardingMatchesPage: React.FC = () => {
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
    </OnBoardingPageContainer>
  )
}

export default OnBoardingMatchesPage
