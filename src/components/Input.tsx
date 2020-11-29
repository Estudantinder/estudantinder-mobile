import React, { useEffect, useRef } from 'react'
import { Text, TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { useField } from '@unform/core'

interface Props {
  name: string
  label?: string
}

type InputProps = TextInputProps & Props

export interface TextInputRef extends TextInput {
  value: unknown
}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  const inputRef = useRef<TextInputRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <>
      {label && <Text>{label}</Text>}
      <TextInput
        ref={inputRef}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value
          }
        }}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <Text>{error}</Text>}
    </>
  )
}
export default Input
