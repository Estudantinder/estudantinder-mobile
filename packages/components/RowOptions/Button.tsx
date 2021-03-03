import React from 'react'
import { ViewStyle } from 'react-native'

import {
  RowOptionsButtonContainer,
  RowOptionsButtonText,
} from './row-options.styles'

export interface RowOptionsButtonProps {
  isActive: boolean
  onPress(): void
  children: string
  containerStyle?: ViewStyle
}

const RowOptionsButton: React.FC<RowOptionsButtonProps> = (props) => {
  return (
    <RowOptionsButtonContainer
      onPress={props.onPress}
      isActive={props.isActive}
      style={props.containerStyle}
    >
      <RowOptionsButtonText isActive={props.isActive}>
        {props.children}
      </RowOptionsButtonText>
    </RowOptionsButtonContainer>
  )
}

export default RowOptionsButton
