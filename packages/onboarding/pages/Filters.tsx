import React from 'react'
import { Text } from 'react-native'

import { PageContainer } from 'packages/styles'

import OnBoardingFooter from '../components/Footer'
import { useOnBoardingContext } from '../context'

const OnBoardingFiltersPage: React.FC = () => {
  const { navigateToIndex } = useOnBoardingContext()

  return (
    <PageContainer>
      <Text>Edite os seus filtros a qualquer momento.</Text>

      <OnBoardingFooter onNextPress={() => navigateToIndex(2)} />
    </PageContainer>
  )
}

export default OnBoardingFiltersPage
