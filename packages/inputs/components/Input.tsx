import React, { useEffect, useRef, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { useField } from '@unform/core'

import { Row } from 'packages/styles'
import theme from 'packages/styles/theme'

import InputInfo from './InputInfo'

import { InputContainer, InputLabel, InputSuffix, StyledInput } from '../styles'

export interface InputCoreProps {
  name: string
  label?: string
  info?: string
}

interface ExtendedInputProps {
  onChangeText?: (value: string) => string | undefined
}

export type InputProps = InputCoreProps & ExtendedInputProps & TextInputProps

const Input: React.FC<InputProps> = ({ children, ...props }) => {
  const inputRef = useRef<ValueRef<TextInput>>(null)

  const [isActive, setIsActive] = useState(false)

  const { registerField, ...field } = useField(props.name)

  useEffect(() => {
    registerField({
      name: field.fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [field.fieldName, registerField])

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = field.defaultValue
  }, [field.defaultValue])

  const onChangeText = (value: string) => {
    const newValue = props.onChangeText?.(value)

    if (inputRef.current) {
      inputRef.current.value = newValue || value
    }
  }

  return (
    <InputContainer>
      {props.label && <InputLabel>{props.label}</InputLabel>}

      <Row>
        <StyledInput
          ref={inputRef}
          isInvalid={!!field.error}
          isActive={isActive}
          defaultValue={field.defaultValue}
          placeholderTextColor={theme.colors.input.placeholder}
          selectionColor={theme.colors.primary.purple}
          returnKeyType="next"
          blurOnSubmit={false}
          {...props}
          onChangeText={onChangeText}
          onFocus={(e) => {
            field.clearError()
            setIsActive(true)
            props.onFocus?.(e)
          }}
          onEndEditing={(e) => {
            setIsActive(false)
            props.onEndEditing?.(e)
          }}
        />

        {children && <InputSuffix>{children}</InputSuffix>}
      </Row>

      <InputInfo informative={!field.error}>
        {field.error || props.info}
      </InputInfo>
    </InputContainer>
  )
}

export default Input
