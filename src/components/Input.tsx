import React, { useEffect, useRef } from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { useField } from '@unform/core'

import InputStyled from 'src/styles/components/Input.styled'

interface Props {
  name: string
  label?: string
}

type InputProps = TextInputProps & Props

export interface TextInputRef extends TextInput {
  value: string
}

const Input: React.FC<InputProps> = ({ name, label, children, ...rest }) => {
  const inputRef = useRef<TextInputRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })

    inputRef.current && (inputRef.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  return (
    <InputStyled.Container>
      {label && <InputStyled.Label>{label}</InputStyled.Label>}
      <InputStyled.TextInput
        ref={inputRef as never}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value
          }
        }}
        defaultValue={defaultValue}
        {...rest}
      />

      {children && <InputStyled.Suffix>{children}</InputStyled.Suffix>}

      <InputStyled.TextError>{error}</InputStyled.TextError>
    </InputStyled.Container>
  )
}
export default Input
