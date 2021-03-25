import React from 'react'

import { useOnBoardingContext } from './context'
import { OnBoardingContainer } from './onboarding.styles'
import OnBoardingFiltersPage from './pages/Filters'
import OnBoardingInteractionPage from './pages/Interaction'
import OnBoardingMatchesPage from './pages/Matches'

const OnBoarding: React.FC = () => {
  const { pagerRef } = useOnBoardingContext()

  return (
    <OnBoardingContainer
      ref={pagerRef}
      initialPage={0}
      orientation="horizontal"
    >
      <OnBoardingInteractionPage />
      <OnBoardingFiltersPage />
      <OnBoardingMatchesPage />
    </OnBoardingContainer>
  )
}

export default OnBoarding
