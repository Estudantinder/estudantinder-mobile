import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import OptionButton from 'src/components/OptionButton'

interface ViewRef extends View {
  value: number
}

const SignUpSchoolYearPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField(
    'school_year'
  )

  const [schoolYear, setSchoolYear] = useState<number>(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  function handleChangeSchoolYear(newSchoolYear: number) {
    ref?.current && (ref.current.value = newSchoolYear)

    setSchoolYear(newSchoolYear)
  }

  return (
    <View ref={ref}>
      <Text>Série</Text>
      <View style={{ flexDirection: 'row' }}>
        <OptionButton
          label="1º ano"
          isActive={schoolYear === 1}
          onPress={() => handleChangeSchoolYear(1)}
        />
        <OptionButton
          label="2º ano"
          isActive={schoolYear === 2}
          onPress={() => handleChangeSchoolYear(2)}
        />
        <OptionButton
          label="3º ano"
          isActive={schoolYear === 3}
          onPress={() => handleChangeSchoolYear(3)}
        />
      </View>

      <Text>{error}</Text>
    </View>
  )
}

export default SignUpSchoolYearPicker
