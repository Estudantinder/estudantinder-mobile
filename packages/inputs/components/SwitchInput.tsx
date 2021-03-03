import React, { useEffect, useRef, useState } from 'react'
import { Switch } from 'react-native'

import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

import { Row } from 'packages/styles'

import { InputContainer, SwitchInputText } from '../input.styles'
import InputInfo from './InputInfo'

export interface SwitchInputProps {
  name: string
  label: string
}

const SwitchInput: React.FC<SwitchInputProps> = (props) => {
  const inputRef = useRef<ValueRef<Switch, boolean>>(null)

  const { fieldName, defaultValue, registerField, error } = useField(props.name)

  const theme = useTheme()

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })

    inputRef.current && (inputRef.current.value = defaultValue ? true : false)
  }, [defaultValue, fieldName, registerField])

  const [isEnabled, setIsEnabled] = useState(defaultValue ? true : false)

  function handleChangeValue() {
    if (!inputRef.current) return setIsEnabled(!isEnabled)

    inputRef.current.value = !isEnabled

    setIsEnabled(!isEnabled)
  }

  return (
    <InputContainer>
      <Row>
        <Switch
          ref={inputRef}
          trackColor={{
            false: '#767577',
            true: theme.colors.background.light_purple,
          }}
          thumbColor={isEnabled ? theme.colors.primary.purple : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleChangeValue}
          value={isEnabled}
        />

        <SwitchInputText>{props.label}</SwitchInputText>
      </Row>

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default SwitchInput
