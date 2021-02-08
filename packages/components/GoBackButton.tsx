import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { Entypo } from '@expo/vector-icons'

import { GoBackButtonContainer } from './components.styles'

const GoBackButton: React.FC = () => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <GoBackButtonContainer onPress={handleGoBack}>
      <Entypo name="chevron-thin-left" size={20} color="#000" />
    </GoBackButtonContainer>
  )
}

export default GoBackButton
