import React from 'react'

import Styled from './styles'

export interface IOptionButtonProps {
  label: string
  isActive: boolean
  onPress(): void
}

const OptionButton: React.FC<IOptionButtonProps> = (props) => {
  return (
    <Styled.Button onPress={props.onPress} isActive={props.isActive}>
      <Styled.ButtonText isActive={props.isActive}>
        {props.label}
      </Styled.ButtonText>
    </Styled.Button>
  )
}

export default OptionButton
