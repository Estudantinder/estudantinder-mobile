import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ViewStyle } from 'react-native'

import { Entypo } from '@expo/vector-icons'

import { GoBackButtonContainer } from './components.styles'

export interface GoBackButtonProps {
  style?: ViewStyle
}

const GoBackButton: React.FC<GoBackButtonProps> = (props) => {
  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <GoBackButtonContainer style={props.style} onPress={handleGoBack}>
      <Entypo name="chevron-thin-left" size={20} color="#000" />
    </GoBackButtonContainer>
  )
}

export default GoBackButton
