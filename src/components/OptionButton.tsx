import React from 'react'
import { Text } from 'react-native'

import OptionButtonStyled from 'src/styles/components/OptionButton.styled'

export interface IOptionButtonProps {
  label: string
  isActive: boolean
  onPress(): void
}

const OptionButton: React.FC<IOptionButtonProps> = (props) => {
  return (
    <OptionButtonStyled.Button
      onPress={props.onPress}
      isActive={props.isActive}
    >
      <Text>{props.label}</Text>
    </OptionButtonStyled.Button>
  )
}

export default OptionButton
