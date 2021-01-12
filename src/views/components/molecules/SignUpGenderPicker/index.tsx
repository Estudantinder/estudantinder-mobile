import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import Input from 'views/components/atoms/Input'
import OptionButton from 'views/components/atoms/OptionButton'

import Styled from './styles'

interface ViewRef extends View {
  value: string
}

const SignUpGenderPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField } = useField('gender')

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
    <Styled.Container ref={ref}>
      <Styled.Label>Gênero (Opcional)</Styled.Label>

      <Styled.OptionsContainer>
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
      </Styled.OptionsContainer>

      <Styled.OrText>ou</Styled.OrText>

      <Input
        label="Digite o seu gênero"
        onChangeText={handleChangeGender}
        value={gender}
        name="custom_gender"
      />
    </Styled.Container>
  )
}

export default SignUpGenderPicker
