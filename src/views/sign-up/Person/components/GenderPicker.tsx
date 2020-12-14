import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import OptionButton from 'src/components/OptionButton'

import StatefulInput from './StatefulInput'

interface ViewRef extends View {
  value: string
}

const SignUpGenderPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField('gender')

  const [gender, setGender] = useState<string>(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  function handleSelectMasc() {
    if (gender.toUpperCase() === 'MASCULINO') {
      return handleChangeGender('')
    }

    handleChangeGender('Masculino')
  }

  function handleSelectFem() {
    if (gender.toUpperCase() === 'FEMININO') {
      return handleChangeGender('')
    }

    handleChangeGender('Feminino')
  }

  function handleChangeGender(newGender: string) {
    ref?.current && (ref.current.value = newGender)

    setGender(newGender)
  }

  return (
    <View ref={ref}>
      <Text>Gênero (Opcional)</Text>

      <View style={{ flexDirection: 'row' }}>
        <OptionButton
          label="Feminino"
          isActive={gender.toUpperCase() === 'FEMININO'}
          onPress={handleSelectFem}
        />
        <OptionButton
          label="Masculino"
          isActive={gender.toUpperCase() === 'MASCULINO'}
          onPress={handleSelectMasc}
        />
      </View>

      <Text>ou</Text>

      <View>
        <StatefulInput
          label="Digite o seu gênero"
          setState={handleChangeGender}
          state={gender}
          error={error}
        />
      </View>
    </View>
  )
}

export default SignUpGenderPicker
