import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'

import { useOnBoardingContext } from '../context'
import {
  OnBoardingFooterButton,
  OnBoardingFooterButtonText,
  OnboardingFooterContainer,
} from '../onboarding.styles'

export interface OnBoardingFooterProps {
  onNextPress(): void
}

const OnBoardingFooter: React.FC<OnBoardingFooterProps> = (props) => {
  const router = useNavigation()

  const { endOnBoarding } = useOnBoardingContext()

  const handleEndOnboarding = async () => {
    await endOnBoarding()

    router.navigate(UNAUTHENTICATED_ROUTES.LANDING)
  }

  return (
    <OnboardingFooterContainer>
      <OnBoardingFooterButton onPress={handleEndOnboarding}>
        <OnBoardingFooterButtonText>Pular</OnBoardingFooterButtonText>
      </OnBoardingFooterButton>

      <OnBoardingFooterButton onPress={props.onNextPress}>
        <OnBoardingFooterButtonText>Avançar</OnBoardingFooterButtonText>
      </OnBoardingFooterButton>
    </OnboardingFooterContainer>
  )
}

export default OnBoardingFooter
