import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import React, { useEffect, useRef, useState } from 'react'
import { View, Platform, Text } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons'
import { useField } from '@unform/core'
import { formatToDate } from 'brazilian-values'
import env from 'env'

import InputInfo from 'packages/inputs/components/InputInfo'
import { InputContainer, InputLabel, InputSuffix } from 'packages/inputs/styles'
import { Row } from 'packages/styles'

import {
  BirthDatePickerButton,
  BirthDatePickerText,
} from '../edit-target-info.styles'
import {
  STUDENT_ABOUT_SCHEMA_MAX_DATE,
  STUDENT_ABOUT_SCHEMA_MIN_DATE,
} from '../validators'

const BirthDatePicker: React.FC = () => {
  const { registerField, ...field } = useField('birth_date')

  const [wasSelected, setWasSelected] = useState(!!field.defaultValue)

  const [date, setDate] = useState<Date>(
    (field.defaultValue && new Date(field.defaultValue)) ||
      STUDENT_ABOUT_SCHEMA_MAX_DATE
  )
  const [show, setShow] = useState(Platform.OS === 'ios')

  const ref = useRef<ValueRef<View, Date>>(null)

  useEffect(() => {
    registerField({
      name: field.fieldName,
      ref: ref.current,
      path: 'value',
    })

    if (ref?.current) {
      ref.current.value = field.defaultValue
      ref.current.focus = () => {
        setShow(true)
      }
    }
  }, [field.defaultValue, field.fieldName, registerField])

  function onChange(_: Event, newDate?: Date) {
    Platform.OS !== 'ios' && setShow(false)

    if (!newDate) return

    if (ref?.current) {
      ref.current.value = newDate
    }

    setDate(newDate)

    setWasSelected(true)
  }

  function getPlaceholder() {
    if (!wasSelected || !date) return '00/00/0000'

    return formatToDate(date)
  }

  return (
    <InputContainer ref={ref} testID="birth_date">
      <InputLabel>Data de nascimento</InputLabel>

      {Platform.OS !== 'ios' && (
        <Row>
          <BirthDatePickerButton onPress={() => setShow(true)}>
            <BirthDatePickerText>{getPlaceholder()}</BirthDatePickerText>
          </BirthDatePickerButton>

          <InputSuffix>
            <BorderlessButton
              onPress={() => setShow(true)}
              style={{ marginTop: 2 }}
            >
              <Entypo name="chevron-thin-right" size={14} color="#2d2d2d" />
            </BorderlessButton>
          </InputSuffix>
        </Row>
      )}

      <InputInfo informative={!field.error}>
        {field.error || 'Você precisa ter entre 14 e 21 anos'}
      </InputInfo>

      {env().env_name === 'test' && (
        <Text testID="birth_date-open">{show}</Text>
      )}

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={onChange}
          maximumDate={STUDENT_ABOUT_SCHEMA_MAX_DATE}
          minimumDate={STUDENT_ABOUT_SCHEMA_MIN_DATE}
        />
      )}
    </InputContainer>
  )
}

export default BirthDatePicker
