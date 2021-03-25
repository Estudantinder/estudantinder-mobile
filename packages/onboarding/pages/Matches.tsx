import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Text } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'
import { PageContainer } from 'packages/styles'

import { useOnBoardingContext } from '../context'

const OnBoardingMatchesPage: React.FC = () => {
  const { endOnBoarding } = useOnBoardingContext()

  const router = useNavigation()

  const handleEndOnboarding = async () => {
    await endOnBoarding()

    router.navigate(UNAUTHENTICATED_ROUTES.LANDING)
  }

  return (
    <PageContainer>
      <Text>Acesse os matches para fazer cada vez mais conexões!</Text>

      <PrimaryButton onPress={handleEndOnboarding}>CONTINUAR</PrimaryButton>
    </PageContainer>
  )
}

export default OnBoardingMatchesPage
