import React, { useEffect, useRef } from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { useField } from '@unform/core'

import Styled from './styles'

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
    <Styled.Container>
      {label && <Styled.Label>{label}</Styled.Label>}
      <Styled.TextInput
        ref={inputRef as never}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value
          }
        }}
        defaultValue={defaultValue}
        {...rest}
      />

      {children && <Styled.Suffix>{children}</Styled.Suffix>}

      <Styled.TextError>{error}</Styled.TextError>
    </Styled.Container>
  )
}
export default Input
