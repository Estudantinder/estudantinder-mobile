import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import { Shifts } from 'src/common/Shift'
import OptionButton from 'src/components/OptionButton'

interface ViewRef extends View {
  value: Shifts
}

const SignUpShiftPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField('shift')

  const [shift, setShift] = useState<Shifts>(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  function handleChangeShift(newShift: Shifts) {
    ref?.current && (ref.current.value = newShift)

    setShift(newShift)
  }

  return (
    <View ref={ref}>
      <Text>Turno</Text>
      <View style={{ flexDirection: 'row' }}>
        <OptionButton
          label="Manhã"
          isActive={shift === 1}
          onPress={() => handleChangeShift(Shifts.MORNING)}
        />
        <OptionButton
          label="Tarde"
          isActive={shift === 2}
          onPress={() => handleChangeShift(Shifts.AFTERNOON)}
        />
      </View>

      <Text>{error}</Text>
    </View>
  )
}

export default SignUpShiftPicker
