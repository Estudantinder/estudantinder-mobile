import React from 'react'
import { Text } from 'react-native'

import { PageContainer } from 'packages/styles'

import OnBoardingFooter from '../components/Footer'

const OnBoardingInteractionPage: React.FC = () => {
  return (
    <PageContainer>
      <Text>Dê like nos estudantes que se interessar.</Text>

      <OnBoardingFooter />
    </PageContainer>
  )
}

export default OnBoardingInteractionPage
