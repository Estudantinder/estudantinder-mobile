import React from 'react'
import { Text } from 'react-native'

import Styled from './styles'

export interface IOptionButtonProps {
  label: string
  isActive: boolean
  onPress(): void
}

const OptionButton: React.FC<IOptionButtonProps> = (props) => {
  return (
    <Styled.Button onPress={props.onPress} isActive={props.isActive}>
      <Text>{props.label}</Text>
    </Styled.Button>
  )
}

export default OptionButton
