import React from 'react'

import { PrimaryLabelContainer, PrimaryLabelText } from './components.styles'

export interface PrimaryLabelProps {
  size?: 'large' | 'small'
  children: string
}

const PrimaryLabel: React.FC<PrimaryLabelProps> = (props) => {
  return (
    <PrimaryLabelContainer size={props.size || 'large'}>
      <PrimaryLabelText size={props.size || 'large'}>
        {props.children}
      </PrimaryLabelText>
    </PrimaryLabelContainer>
  )
}

export default PrimaryLabel
