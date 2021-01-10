import React from 'react'

import Styled from './styles'

export interface FormButtonProps {
  onPress(): void
  title: string
}

const FormButton: React.FC<FormButtonProps> = (props) => {
  return (
    <Styled.Button activeOpacity={0.8} onPress={props.onPress}>
      <Styled.ButtonText>{props.title}</Styled.ButtonText>
    </Styled.Button>
  )
}

export default FormButton
