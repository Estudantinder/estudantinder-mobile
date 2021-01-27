import React, { Fragment, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import InputInfo from 'views/components/atoms/InputInfo'
import OptionButton from 'views/components/atoms/OptionButton'
import {
  HorizontalDivider,
  InputContainer,
  InputLabel,
  Row,
} from 'views/styles/globalStyles'

import { OptionsItem } from 'shared/interfaces'

interface ViewRef extends View {
  value: string
}

export interface RowOptionsPickerProps {
  name: string
  label: string
  options: Array<OptionsItem>
  canDeselect?: boolean
}

const RowOptionsPicker: React.FC<RowOptionsPickerProps> = (props) => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField(props.name)

  const [value, setValue] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

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
    <InputContainer ref={ref}>
      <InputLabel>{props.label}</InputLabel>

      <Row>
        {props.options.map((opt, index) => (
          <Fragment key={opt.value}>
            <OptionButton
              isActive={value === opt.value}
              onPress={() => handleChangeValue(opt.value)}
            >
              {opt.label}
            </OptionButton>
            {props.options[index + 1] ? <HorizontalDivider /> : null}
          </Fragment>
        ))}
      </Row>

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default RowOptionsPicker
