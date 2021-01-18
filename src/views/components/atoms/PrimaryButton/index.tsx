import React from 'react'

import Styled from './styles'

export interface PrimaryButtonProps {
  onPress(): void
  children: string
}

const PrimaryButton: React.FC<PrimaryButtonProps> = (props) => {
  return (
    <Styled.Button activeOpacity={0.8} onPress={props.onPress}>
      <Styled.ButtonText>{props.children}</Styled.ButtonText>
    </Styled.Button>
  )
}

export default PrimaryButton
