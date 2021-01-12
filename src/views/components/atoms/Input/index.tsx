import React, { useEffect, useRef, useState } from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

import Styled from './styles'

export interface InputComponentProps {
  name: string
  label?: string
}

export type InputProps = TextInputProps & InputComponentProps

export interface TextInputRef extends TextInput {
  value: string
}

const Input: React.FC<InputProps> = ({ name, label, children, ...rest }) => {
  const inputRef = useRef<TextInputRef>(null)

  const [isActive, setIsActive] = useState(false)

  const theme = useTheme()

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
        isInvalid={!!error}
        isActive={isActive}
        defaultValue={defaultValue}
        placeholderTextColor={theme.colors.input.placeholder}
        selectionColor={theme.colors.primary.purple}
        returnKeyType="next"
        blurOnSubmit={false}
        {...rest}
        onFocus={(e) => {
          setIsActive(true)
          rest.onFocus?.(e)
        }}
        onEndEditing={(e) => {
          setIsActive(false)
          rest.onEndEditing?.(e)
        }}
      />

      {children && <Styled.Suffix>{children}</Styled.Suffix>}

      <Styled.InvalidContainer>
        {error && <Styled.InvalidIcon />}
        {error && <Styled.InvalidText>{error}</Styled.InvalidText>}
      </Styled.InvalidContainer>
    </Styled.Container>
  )
}
export default Input
