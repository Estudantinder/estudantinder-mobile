import React from 'react'
import { Text } from 'react-native'

import { PageContainer } from 'packages/styles'

import OnBoardingFooter from '../components/Footer'
import { useOnBoardingContext } from '../context'

const OnBoardingInteractionPage: React.FC = () => {
  const { navigateToIndex } = useOnBoardingContext()

  return (
    <PageContainer>
      <Text>Dê like nos estudantes que se interessar.</Text>

      <OnBoardingFooter onNextPress={() => navigateToIndex(1)} />
    </PageContainer>
  )
}

export default OnBoardingInteractionPage
