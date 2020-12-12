import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import React, { useEffect, useRef, useState } from 'react'
import { View, Platform, Text } from 'react-native'

import { useField } from '@unform/core'

import DatePickerStyled from '../styles/DatePicker.styled'

interface ViewRef extends View {
  value: Date
}

const actualYear = new Date().getFullYear()

const maxDate = new Date(`12/31/${actualYear - 12}`)

const minDate = new Date(`1/1/${actualYear - 21}`)

export const PersonDatePicker = () => {
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
    <DatePickerStyled.Container ref={ref}>
      <DatePickerStyled.Label>Data de nascimento</DatePickerStyled.Label>

      {Platform.OS !== 'ios' && (
        <DatePickerStyled.Button onPress={() => setShow(true)}>
          <Text>{getPlaceholder()}</Text>
        </DatePickerStyled.Button>
      )}

      {error ? (
        <DatePickerStyled.TextError>{error}</DatePickerStyled.TextError>
      ) : (
        <DatePickerStyled.HelpMessage>
          Você precisa ser maior que 12 anos e menor que 21 para entrar no app
        </DatePickerStyled.HelpMessage>
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
    </DatePickerStyled.Container>
  )
}
