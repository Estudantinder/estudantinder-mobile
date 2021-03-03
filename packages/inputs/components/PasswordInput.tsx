import React from 'react'

import Input, { InputProps } from './Input'

interface PasswordInputProps extends InputProps {
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
