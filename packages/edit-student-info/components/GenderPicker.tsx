import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import RowOptionsButton from 'packages/components/RowOptions/Button'
import Gender, { GENDERS, IGender } from 'packages/entities/Gender'
import Input from 'packages/inputs/components/Input'
import { InputContainer, InputLabel } from 'packages/inputs/input.styles'
import { HorizontalDivider, Row } from 'packages/styles'

import { GenderPickerOrText } from '../edit-student-info.styles'

const GenderPicker: React.FC = () => {
  const ref = useRef<ValueRef<View, IGender>>(null)

  const { fieldName, defaultValue, registerField } = useField('gender')

  const getGenderName = () => {
    if (!defaultValue) return ''

    return new Gender(defaultValue).getGenderName()
  }

  const [gender, setGender] = useState<string>(getGenderName())

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  const handleSelectMasc = () => {
    if (gender.toUpperCase() === 'MASCULINO') {
      return handleChangeGender('')
    }

    handleChangeGender('Masculino')
  }

  const handleSelectFem = () => {
    if (gender.toUpperCase() === 'FEMININO') {
      return handleChangeGender('')
    }

    handleChangeGender('Feminino')
  }

  const handleChangeGender = (newGender: string) => {
    if (!ref.current) return setGender(newGender)

    if (newGender.toUpperCase() === 'FEMININO') {
      ref.current.value = GENDERS.FEMALE
    } else if (newGender.toUpperCase() === 'MASCULINO') {
      ref.current.value = GENDERS.MALE
    } else {
      ref.current.value = newGender
    }

    setGender(newGender)
  }

  return (
    <InputContainer testID="gender" ref={ref}>
      <InputLabel>Gênero (Opcional)</InputLabel>

      <Row>
        <RowOptionsButton
          isActive={gender.toUpperCase() === 'FEMININO'}
          onPress={handleSelectFem}
        >
          Feminino
        </RowOptionsButton>

        <HorizontalDivider />

        <RowOptionsButton
          isActive={gender.toUpperCase() === 'MASCULINO'}
          onPress={handleSelectMasc}
        >
          Masculino
        </RowOptionsButton>
      </Row>

      <GenderPickerOrText>ou</GenderPickerOrText>

      <Input
        testID="custom-gender"
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

export default GenderPicker
