import React, { useState } from 'react'
import { Platform } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import Input from 'views/components/atoms/Input'

import Styled from './styles'

interface IPasswordInputProps {
  name: string
  label: string
}

const PasswordInput: React.FC<IPasswordInputProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      name={props.name}
      label={props.label}
      secureTextEntry={Platform.OS === 'ios' ? true : !isVisible}
    >
      {Platform.OS !== 'ios' && (
        <BorderlessButton onPress={() => setIsVisible(!isVisible)}>
          {isVisible ? <Styled.EyeOffIcon /> : <Styled.EyeIcon />}
        </BorderlessButton>
      )}
    </Input>
  )
}

export default PasswordInput
