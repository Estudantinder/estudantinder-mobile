import React from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import Styled from './styles'

export interface PrimaryButtonProps {
  onPress(): void
  children: string
  style?: StyleProp<ViewStyle>
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Styled.Button style={props.style} onPress={props.onPress}>
      <Styled.ButtonText>{props.children}</Styled.ButtonText>
    </Styled.Button>
  )
}

export default PrimaryButton
