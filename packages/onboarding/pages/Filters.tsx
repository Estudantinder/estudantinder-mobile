import React from 'react'
import { Image } from 'react-native'

import Filters from '../assets/filters.png'
import {
  OnBoardingPageContainer,
  OnBoardingPageSubTitle,
  OnBoardingPageTitle,
} from '../onboarding.styles'

const OnBoardingFiltersPage: React.FC = () => {
  return (
    <OnBoardingPageContainer>
      <Image source={Filters} />
      <OnBoardingPageTitle style={{ textAlign: 'center' }}>
        Edite os seus filtros a qualquer momento.
      </OnBoardingPageTitle>
      <OnBoardingPageSubTitle>
        Ao lado direito da tela você encontrará os filtros onde pode definir
        suas preferências sobre os estudantes que espera encontrar.
      </OnBoardingPageSubTitle>
    </OnBoardingPageContainer>
  )
}

export default OnBoardingFiltersPage
