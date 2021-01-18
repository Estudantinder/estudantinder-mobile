import React, { useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import OptionButton from 'views/components/atoms/OptionButton'
import Input from 'views/components/molecules/Input'
import {
  HorizontalDivider,
  InputContainer,
  InputLabel,
  Row,
} from 'views/styles/globalStyles'

import { GENDERS_ENUM } from 'shared/constants'
import { Gender } from 'shared/interfaces'

import Styled from './styles'

interface ViewRef extends View {
  value: Gender
}

const GenderPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField } = useField('gender')

  function getDefaultValue() {
    if (!defaultValue) return ''

    if (isNaN(defaultValue)) return defaultValue

    if (defaultValue === GENDERS_ENUM.FEMALE) return 'Feminino'

    if (defaultValue === GENDERS_ENUM.MALE) return 'Masculino'
  }

  const [gender, setGender] = useState<string>(getDefaultValue())

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
    if (!ref.current) return setGender(newGender)

    if (newGender.toUpperCase() === 'FEMININO') {
      ref.current.value = GENDERS_ENUM.FEMALE
    } else if (newGender.toUpperCase() === 'MASCULINO') {
      ref.current.value = GENDERS_ENUM.MALE
    } else {
      ref.current.value = newGender
    }

    setGender(newGender)
  }

  return (
    <InputContainer ref={ref}>
      <InputLabel>Gênero (Opcional)</InputLabel>

      <Row>
        <OptionButton
          isActive={gender.toUpperCase() === 'FEMININO'}
          onPress={handleSelectFem}
        >
          Feminino
        </OptionButton>

        <HorizontalDivider />

        <OptionButton
          isActive={gender.toUpperCase() === 'MASCULINO'}
          onPress={handleSelectMasc}
        >
          Masculino
        </OptionButton>
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

export default GenderPicker
