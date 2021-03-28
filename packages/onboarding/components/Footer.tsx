import React from 'react'

import useSkipOnboarding from '../hooks/useSkipOnboarding'
import {
  OnBoardingFooterButton,
  OnBoardingFooterButtonText,
  OnboardingFooterContainer,
} from '../onboarding.styles'

export interface OnBoardingFooterProps {
  onNextPress(): void
}

const OnBoardingFooter: React.FC<OnBoardingFooterProps> = (props) => {
  const handleSkipOnboarding = useSkipOnboarding()

  return (
    <OnboardingFooterContainer>
      <OnBoardingFooterButton onPress={handleSkipOnboarding}>
        <OnBoardingFooterButtonText>Pular</OnBoardingFooterButtonText>
      </OnBoardingFooterButton>

      <OnBoardingFooterButton onPress={props.onNextPress}>
        <OnBoardingFooterButtonText>Avançar</OnBoardingFooterButtonText>
      </OnBoardingFooterButton>
    </OnboardingFooterContainer>
  )
}

export default OnBoardingFooter
