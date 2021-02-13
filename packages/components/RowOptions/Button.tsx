import React from 'react'

import {
  RowOptionsButtonContainer,
  RowOptionsButtonText,
} from './row-options.styles'

export interface RowOptionsButtonProps {
  isActive: boolean
  onPress(): void
  children: string
}

const RowOptionsButton: React.FC<RowOptionsButtonProps> = (props) => {
  return (
    <RowOptionsButtonContainer
      onPress={props.onPress}
      isActive={props.isActive}
    >
      <RowOptionsButtonText isActive={props.isActive}>
        {props.children}
      </RowOptionsButtonText>
    </RowOptionsButtonContainer>
  )
}

export default RowOptionsButton
