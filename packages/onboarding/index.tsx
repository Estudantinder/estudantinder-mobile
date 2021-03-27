import React from 'react'
import { View } from 'react-native'

import OnBoardingFooter from './components/Footer'
import { useOnBoardingContext } from './context'
import { OnBoardingContainer } from './onboarding.styles'
import OnBoardingFiltersPage from './pages/Filters'
import OnBoardingInteractionPage from './pages/Interaction'
import OnBoardingMatchesPage from './pages/Matches'

const OnBoarding: React.FC = () => {
  const { pagerRef, navigateToIndex } = useOnBoardingContext()

  return (
    <View style={{ flex: 1 }}>
      <OnBoardingContainer initialPage={0} ref={pagerRef}>
        <View key="1">
          <OnBoardingInteractionPage />

          <OnBoardingFooter onNextPress={() => navigateToIndex(1)} />
        </View>
        <View key="2">
          <OnBoardingFiltersPage />
          <OnBoardingFooter onNextPress={() => navigateToIndex(2)} />
        </View>
        <View key="3">
          <OnBoardingMatchesPage />
        </View>
      </OnBoardingContainer>
    </View>
  )
}

export default OnBoarding
