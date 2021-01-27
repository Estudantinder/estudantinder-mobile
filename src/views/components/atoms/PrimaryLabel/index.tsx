import React from 'react'

import Styled from './styles'

export interface PrimaryLabelProps {
  children: string
}

const PrimaryLabel: React.FC<PrimaryLabelProps> = (props) => {
  return (
    <Styled.Container>
      <Styled.Text>{props.children}</Styled.Text>
    </Styled.Container>
  )
}

export default PrimaryLabel
