import React from 'react'
import { Text } from 'react-native'

import { Row } from 'packages/styles'

const OnBoardingFooter: React.FC = () => {
  return (
    <Row justifyContent="space-between">
      <Text>Pular</Text>
      <Text>Avançar</Text>
    </Row>
  )
}

export default OnBoardingFooter
