import React from 'react'

import Styled from './styles'

export interface IFooterProps {
  onPress(): void
  buttonTitle: string
}

const Footer: React.FC<IFooterProps> = (props) => {
  return (
    <Styled.Container>
      <Styled.Button onPress={props.onPress}>
        <Styled.ButtonText>{props.buttonTitle}</Styled.ButtonText>
      </Styled.Button>
    </Styled.Container>
  )
}

export default Footer
