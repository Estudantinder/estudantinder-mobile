import React, { useEffect, useRef, useState } from 'react'
import { Switch } from 'react-native'

import { useField } from '@unform/core'
import { useTheme } from 'styled-components'

import { InputContainer, Row } from 'views/styles/globalStyles'

import InputBottom from '../InputBottom'

import Styled from './styles'

export interface SwitchInputProps {
  name: string
  label: string
}

interface SwitchRef extends Switch {
  value: boolean
}

const SwitchInput: React.FC<SwitchInputProps> = (props) => {
  const inputRef = useRef<SwitchRef>(null)

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

        <Styled.InputText>{props.label}</Styled.InputText>
      </Row>
      <InputBottom text={error} />
    </InputContainer>
  )
}

export default SwitchInput
