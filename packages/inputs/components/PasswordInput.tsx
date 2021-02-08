import React from 'react'
import { TextInputProps } from 'react-native'

import Input from './Input'

interface PasswordInputProps extends TextInputProps {
  name: string
  label: string
  children?: undefined
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  return (
    <Input
      {...props}
      autoCapitalize="none"
      autoCompleteType="password"
      autoCorrect={false}
      passwordRules="required: digit; minlength: 8"
      secureTextEntry
      textContentType="password"
    />
  )
}

export default PasswordInput
