import React from 'react'
import { TextInputProps } from 'react-native'

import InputStyled from 'views/components/atoms/Input/styles'

interface Props {
  label?: string
  state: string
  error?: string
  setState(value: string): void
}

type InputProps = TextInputProps & Props

const StatefulInput: React.FC<InputProps> = ({
  state,
  setState,
  error,
  label,
  children,
  ...rest
}) => {
  return (
    <InputStyled.Container>
      {label && <InputStyled.Label>{label}</InputStyled.Label>}
      <InputStyled.TextInput onChangeText={setState} value={state} {...rest} />

      {children && <InputStyled.Suffix>{children}</InputStyled.Suffix>}

      <InputStyled.TextError>{error}</InputStyled.TextError>
    </InputStyled.Container>
  )
}
export default StatefulInput
