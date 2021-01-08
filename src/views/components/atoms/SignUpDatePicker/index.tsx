import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import React, { useEffect, useRef, useState } from 'react'
import { View, Platform, Text } from 'react-native'

import { useField } from '@unform/core'

import Styled from './styles'

interface ViewRef extends View {
  value: Date
}

const actualYear = new Date().getFullYear()

const maxDate = new Date(`12/31/${actualYear - 12}`)

const minDate = new Date(`1/1/${actualYear - 21}`)

const SignUpDatePicker = () => {
  const { fieldName, defaultValue, registerField, error } = useField(
    'birth_date'
  )

  const [wasSelected, setWasSelected] = useState(!!defaultValue)

  const [date, setDate] = useState<Date>(defaultValue || maxDate)
  const [show, setShow] = useState(Platform.OS === 'ios')

  const ref = useRef<ViewRef>(null)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  function onChange(event: Event, newDate?: Date) {
    Platform.OS !== 'ios' && setShow(false)

    if (!newDate) return

    if (ref?.current) {
      ref.current.value = newDate
    }

    setDate(newDate)

    setWasSelected(true)
  }

  function getPlaceholder() {
    if (!wasSelected) return 'Selecione sua data de nascimento'

    return date.toDateString()
  }

  return (
    <Styled.Container ref={ref}>
      <Styled.Label>Data de nascimento</Styled.Label>

      {Platform.OS !== 'ios' && (
        <Styled.Button onPress={() => setShow(true)}>
          <Text>{getPlaceholder()}</Text>
        </Styled.Button>
      )}

      {error ? (
        <Styled.TextError>{error}</Styled.TextError>
      ) : (
        <Styled.HelpMessage>
          Você precisa ser maior que 12 anos e menor que 21 para entrar no app
        </Styled.HelpMessage>
      )}

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChange}
          maximumDate={maxDate}
          minimumDate={minDate}
        />
      )}
    </Styled.Container>
  )
}

export default SignUpDatePicker
