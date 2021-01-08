import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import OptionButton from 'views/components/atoms/OptionButton'

interface ViewRef extends View {
  value: string
}

export interface RowOptionsPickerProps {
  name: string
  options: Array<{
    label: string
    value: string
  }>
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

  function handleChangeValue(newValue: string) {
    ref?.current && (ref.current.value = newValue)

    setValue(newValue)
  }

  return (
    <View ref={ref}>
      <Text>Série</Text>
      <View style={{ flexDirection: 'row' }}>
        {props.options.map((opt) => (
          <OptionButton
            key={opt.value}
            label={opt.label}
            isActive={value === opt.value}
            onPress={() => handleChangeValue(opt.value)}
          />
        ))}
      </View>

      <Text>{error}</Text>
    </View>
  )
}

export default RowOptionsPicker
