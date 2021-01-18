import React from 'react'

import Styled from './styles'

export interface IOptionButtonProps {
  isActive: boolean
  onPress(): void
  children: string
}

const OptionButton: React.FC<IOptionButtonProps> = (props) => {
  return (
    <Styled.Button onPress={props.onPress} isActive={props.isActive}>
      <Styled.ButtonText isActive={props.isActive}>
        {props.children}
      </Styled.ButtonText>
    </Styled.Button>
  )
}

export default OptionButton
