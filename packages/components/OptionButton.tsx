import React from 'react'

import { OptionButtonContainer, OptionButtonText } from './components.styles'

export interface IOptionButtonProps {
  isActive: boolean
  onPress(): void
  children: string
}

const OptionButton: React.FC<IOptionButtonProps> = (props) => {
  return (
    <OptionButtonContainer onPress={props.onPress} isActive={props.isActive}>
      <OptionButtonText isActive={props.isActive}>
        {props.children}
      </OptionButtonText>
    </OptionButtonContainer>
  )
}

export default OptionButton
