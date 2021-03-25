import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'
import { Row } from 'packages/styles'

import { useOnBoardingContext } from '../context'

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
    <Row justifyContent="space-between">
      <BorderlessButton onPress={handleEndOnboarding}>
        <Text>Pular</Text>
      </BorderlessButton>

      <BorderlessButton onPress={props.onNextPress}>
        <Text>Avançar</Text>
      </BorderlessButton>
    </Row>
  )
}

export default OnBoardingFooter
