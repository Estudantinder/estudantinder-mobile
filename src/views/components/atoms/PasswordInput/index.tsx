import React, { useState } from 'react'
import { Platform, TextInputProps } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import Input from 'views/components/atoms/Input'

import Styled from './styles'

interface IPasswordInputProps extends TextInputProps {
  name: string
  label: string
}

const PasswordInput: React.FC<IPasswordInputProps> = ({
  label,
  name,
  ...rest
}) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <Input
      name={name}
      label={label}
      secureTextEntry={Platform.OS === 'ios' ? true : !isVisible}
      {...rest}
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
