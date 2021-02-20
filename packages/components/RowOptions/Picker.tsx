import React, { Fragment, useEffect, useRef, useState } from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

import { useField } from '@unform/core'

import InputInfo from 'packages/inputs/components/InputInfo'
import { InputContainer, InputLabel } from 'packages/inputs/input.styles'
import { Row, HorizontalDivider } from 'packages/styles'

import RowOptionsButton from './Button'

interface OptionsItem {
  label: string
  value: string
}

export interface RowOptionsPickerProps extends ViewProps {
  name: string
  label: string
  options: Array<OptionsItem>
  canDeselect?: boolean
  buttonsContainerStyle?: ViewStyle
}

const RowOptionsPicker: React.FC<RowOptionsPickerProps> = (props) => {
  const ref = useRef<ValueRef<View, string>>(null)

  const { registerField, ...field } = useField(props.name)

  const [value, setValue] = useState(field.defaultValue)

  useEffect(() => {
    registerField({
      name: field.fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = field.defaultValue)
  }, [field.defaultValue, field.fieldName, registerField])

  function handleChangeValue(selectedValue: string) {
    let newValue = selectedValue

    if (newValue === value) {
      if (!props.canDeselect) return

      newValue = ''
    }

    ref?.current && (ref.current.value = newValue)

    setValue(newValue)
  }

  return (
    <InputContainer ref={ref} {...props}>
      <InputLabel>{props.label}</InputLabel>

      <Row>
        {props.options.map((opt, index) => (
          <Fragment key={opt.value}>
            <RowOptionsButton
              isActive={value === opt.value}
              onPress={() => handleChangeValue(opt.value)}
              containerStyle={props.buttonsContainerStyle}
            >
              {opt.label}
            </RowOptionsButton>

            {props.options[index + 1] ? <HorizontalDivider /> : null}
          </Fragment>
        ))}
      </Row>

      <InputInfo>{field.error}</InputInfo>
    </InputContainer>
  )
}

export default RowOptionsPicker
