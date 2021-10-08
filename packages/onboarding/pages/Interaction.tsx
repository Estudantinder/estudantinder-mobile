import React from 'react'
import { Image } from 'react-native'

import { useToggleThemeContext } from 'packages/styles/context'

import DarkInteraction from '../assets/dark-interaction.png'
import Interaction from '../assets/interaction.png'
import {
  OnBoardingPageContainer,
  OnBoardingPageSubTitle,
  OnBoardingPageTitle,
} from '../onboarding.styles'

const OnBoardingInteractionPage: React.FC = () => {
  const { theme } = useToggleThemeContext()

  return (
    <OnBoardingPageContainer>
      <Image source={theme.name === 'light' ? Interaction : DarkInteraction} />
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
