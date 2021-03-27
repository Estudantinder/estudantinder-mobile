import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'

import OnBoardingFooter from './components/Footer'
import OnBoardingPagination from './components/Pagination'
import { useOnBoardingContext } from './context'
import { OnBoardingContainer } from './onboarding.styles'
import OnBoardingFiltersPage from './pages/Filters'
import OnBoardingInteractionPage from './pages/Interaction'
import OnBoardingMatchesPage from './pages/Matches'

const OnBoarding: React.FC = () => {
  const { pagerRef, navigateToIndex, endOnBoarding } = useOnBoardingContext()

  const router = useNavigation()

  const handleEndOnboarding = async () => {
    await endOnBoarding()

    router.navigate(UNAUTHENTICATED_ROUTES.LANDING)
  }

  return (
    <View style={{ flex: 1 }}>
      <OnBoardingContainer initialPage={0} ref={pagerRef}>
        <View key="1">
          <OnBoardingInteractionPage />

          <OnBoardingPagination activeIndex={0} length={3} />
          <OnBoardingFooter onNextPress={() => navigateToIndex(1)} />
        </View>
        <View key="2">
          <OnBoardingFiltersPage />

          <OnBoardingPagination activeIndex={1} length={3} />
          <OnBoardingFooter onNextPress={() => navigateToIndex(2)} />
        </View>
        <View key="3">
          <OnBoardingMatchesPage />

          <OnBoardingPagination activeIndex={2} length={3} />

          <View style={{ backgroundColor: '#fff', paddingHorizontal: 32 }}>
            <PrimaryButton onPress={handleEndOnboarding}>
              COMEÇAR!
            </PrimaryButton>
          </View>
        </View>
      </OnBoardingContainer>
    </View>
  )
}

export default OnBoarding
