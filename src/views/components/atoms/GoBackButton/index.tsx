import { useNavigation } from '@react-navigation/native'
import React from 'react'

import Styled from './styles'

const GoBackButton: React.FC = () => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <Styled.Container onPress={handleGoBack}>
      <Styled.Icon />
    </Styled.Container>
  )
}

export default GoBackButton
