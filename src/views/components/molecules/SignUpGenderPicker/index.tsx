import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import Input from 'views/components/atoms/Input'
import OptionButton from 'views/components/atoms/OptionButton'
import {
  Divider,
  InputContainer,
  InputLabel,
  Row,
} from 'views/styles/globalStyles'

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
    <InputContainer ref={ref}>
      <InputLabel>Gênero (Opcional)</InputLabel>

      <Row>
        <OptionButton
          label="Feminino"
          isActive={gender.toUpperCase() === 'FEMININO'}
          onPress={handleSelectFem}
        />
        <Divider />
        <OptionButton
          label="Masculino"
          isActive={gender.toUpperCase() === 'MASCULINO'}
          onPress={handleSelectMasc}
        />
      </Row>

      <Styled.OrText>ou</Styled.OrText>

      <Input
        label="Digite o seu gênero"
        onChangeText={handleChangeGender}
        value={gender}
        name="custom_gender"
        returnKeyType="done"
        blurOnSubmit
      />
    </InputContainer>
  )
}

export default SignUpGenderPicker
