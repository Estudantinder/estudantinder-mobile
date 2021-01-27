import React, { ReactText, useEffect, useRef, useState } from 'react'
import Picker, { PickerSelectProps } from 'react-native-picker-select'

import { useField } from '@unform/core'

import InputInfo from 'views/components/atoms/InputInfo'
import { InputComponentProps } from 'views/components/molecules/Input'
import { InputLabel } from 'views/styles/globalStyles'

import Styled from './styles'

type PickerProps = Omit<PickerSelectProps, 'onValueChange'> & {
  onValueChange?: (value: string, index: number) => void
}

export interface SelectProps extends PickerProps, InputComponentProps {}

interface PickerRef extends Picker {
  value: string
}

const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  const inputRef = useRef<PickerRef>(null)

  const {
    fieldName,
    defaultValue,
    registerField,
    error,
    clearError,
  } = useField(props.name)

  const [value, setValue] = useState(defaultValue)

  function handleChangeValue(value: ReactText) {
    const newValue = String(value)

    inputRef?.current && (inputRef.current.value = newValue)

    setValue(newValue)
  }

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
      <InputLabel>{props.label}</InputLabel>
      <Styled.PickerBackground>
        <Picker
          {...props}
          ref={inputRef}
          value={value}
          style={{
            inputAndroid: {
              color: '#000',
            },
          }}
          onValueChange={(value, index) => {
            handleChangeValue(value)

            props.onValueChange?.(value, index)
          }}
          onOpen={clearError}
        />
      </Styled.PickerBackground>

      <InputInfo informative={!error}>{error || props.info}</InputInfo>

      {children}
    </Styled.Container>
  )
}

export default Select
