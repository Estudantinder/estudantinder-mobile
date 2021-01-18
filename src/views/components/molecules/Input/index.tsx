import React, { useEffect, useRef, useState } from 'react'
import { TextInputProps } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

import InputInfo from 'views/components/atoms/InputInfo'
import {
  InputLabel,
  InputContainer,
  InputSuffix,
  Row,
} from 'views/styles/globalStyles'

import Styled from './styles'

export interface InputComponentProps {
  name: string
  label?: string
  info?: string
}

export type InputProps = TextInputProps & InputComponentProps

export interface TextInputRef extends TextInput {
  value: string
}

const Input: React.FC<InputProps> = ({ children, ...props }) => {
  const inputRef = useRef<TextInputRef>(null)

  const [isActive, setIsActive] = useState(false)

  const theme = useTheme()

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(props.name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })

    inputRef.current && (inputRef.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  return (
    <InputContainer>
      {props.label && <InputLabel>{props.label}</InputLabel>}

      <Row>
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
          {...props}
          onFocus={(e) => {
            clearError()
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

      <InputInfo informative={!error}>{error || props.info}</InputInfo>
    </InputContainer>
  )
}
export default Input
