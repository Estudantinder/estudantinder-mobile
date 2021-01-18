import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import React, { useEffect, useRef, useState } from 'react'
import { View, Platform } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { useField } from '@unform/core'

import InputInfo from 'views/components/atoms/InputInfo'
import {
  InputContainer,
  InputLabel,
  InputSuffix,
  Row,
} from 'views/styles/globalStyles'

import Styled from './styles'

interface ViewRef extends View {
  value: string
}

const ACTUAL_YEAR = new Date().getFullYear()

const MAX_DATE = new Date(`12/31/${ACTUAL_YEAR - 12}`)

const MIN_DATE = new Date(`1/1/${ACTUAL_YEAR - 21}`)

const SignUpDatePicker: React.FC = () => {
  const { fieldName, defaultValue, registerField, error } = useField(
    'birth_date'
  )

  const [wasSelected, setWasSelected] = useState(!!defaultValue)

  const [date, setDate] = useState<Date>(
    (defaultValue && new Date(defaultValue)) || MAX_DATE
  )
  const [show, setShow] = useState(Platform.OS === 'ios')

  const ref = useRef<ViewRef>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    if (ref?.current) {
      ref.current.value = defaultValue
      ref.current.focus = () => {
        setShow(true)
      }
    }
  }, [defaultValue, fieldName, registerField])

  function onChange(_: Event, newDate?: Date) {
    Platform.OS !== 'ios' && setShow(false)

    if (!newDate) return

    if (ref?.current) {
      ref.current.value = String(newDate)
    }

    setDate(newDate)

    setWasSelected(true)
  }

  function getPlaceholder() {
    if (!wasSelected || !date) return '00/00/0000'

    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()

    let placeholder

    placeholder = `${day < 10 ? '0' : ''}${day}/`

    placeholder += `${month < 10 ? '0' : ''}${month + 1}/`

    placeholder += year

    return placeholder
  }

  return (
    <InputContainer ref={ref}>
      <InputLabel>Data de nascimento</InputLabel>

      {Platform.OS !== 'ios' && (
        <Row>
          <Styled.Button onPress={() => setShow(true)}>
            <Styled.ButtonText>{getPlaceholder()}</Styled.ButtonText>
          </Styled.Button>

          <InputSuffix>
            <BorderlessButton onPress={() => setShow(true)}>
              <Styled.ArrowRightIcon />
            </BorderlessButton>
          </InputSuffix>
        </Row>
      )}

      <InputInfo informative={!error}>
        {error || 'Você precisa ter entre 14 e 21 anos'}
      </InputInfo>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChange}
          maximumDate={MAX_DATE}
          minimumDate={MIN_DATE}
        />
      )}
    </InputContainer>
  )
}

export default SignUpDatePicker
