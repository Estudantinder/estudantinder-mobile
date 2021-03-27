import React from 'react'
import { Image } from 'react-native'

import Interaction from '../assets/interaction.png'
import {
  OnBoardingPageContainer,
  OnBoardingPageSubTitle,
  OnBoardingPageTitle,
} from '../onboarding.styles'

const OnBoardingInteractionPage: React.FC = () => {
  return (
    <OnBoardingPageContainer>
      <Image source={Interaction} />
      <OnBoardingPageTitle style={{ textAlign: 'center' }}>
        Dê like nos estudantes que se interessar.
      </OnBoardingPageTitle>
      <OnBoardingPageSubTitle>
        Com os botões de like e dislike você pode escolher os estudantes que
        gostou, tendo a opção de seguir para o perfil deles para ver mais
        informações.
      </OnBoardingPageSubTitle>
    </OnBoardingPageContainer>
  )
}

export default OnBoardingInteractionPage
