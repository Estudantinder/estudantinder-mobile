import React from 'react'
import { StyleProp, TextStyle, ViewStyle } from 'react-native'

import { PrimaryButtonContainer, PrimaryButtonText } from './components.styles'

export interface PrimaryButtonProps {
  onPress(): void
  children: string
  containerStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <PrimaryButtonContainer
      style={props.containerStyle}
      onPress={props.onPress}
    >
      <PrimaryButtonText style={props.textStyle}>
        {props.children}
      </PrimaryButtonText>
    </PrimaryButtonContainer>
  )
}

export default PrimaryButton
