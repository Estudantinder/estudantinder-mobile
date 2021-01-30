import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'

import { Feather } from '@expo/vector-icons'
import { FormHandles } from '@unform/core'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import Subject from 'main/entities/Subject'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import { SignUpForm, Title } from 'views/styles/globalStyles'

import {
  GENDERS_ENUM,
  SCHOOL_YEARS_ITEMS,
  SHIFTS,
  SHIFTS_ITEMS,
} from 'shared/constants'

import SchoolCoursePicker from '../SchoolCoursePicker'
import SubjectsPicker from '../SubjectsPicker'

import Styled from './styles'

interface PrefsData {
  course?: string
  gender?: GENDERS_ENUM
  school?: string
  school_year?: number
  shift?: SHIFTS
  subjects: Array<Subject>
}

export interface FilterDrawerProps {
  open: boolean
  setOpen(value: boolean): void
}

const INITIAL_VALUE = -Dimensions.get('window').width - 24

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(INITIAL_VALUE)).current

  const { schools } = useSchoolsData()

  const formRef = useRef<FormHandles>(null)

  useEffect(() => {
    const fadeIn = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
      }).start()
    }

    const fadeOut = () => {
      Animated.timing(fadeAnim, {
        toValue: INITIAL_VALUE,
        duration: 500,
        easing: Easing.in(Easing.ease),
      }).start()
    }

    if (props.open) {
      fadeIn()
    } else {
      fadeOut()
    }
  }, [fadeAnim, props])

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  function handleSubmit(data: PrefsData) {
    const school = schools?.find((value) => String(value.id) === data.school)

    const course = school?.courses.find(
      (value) => String(value.id) === data.course
    )

    console.log({ ...data, course, school })
  }

  return (
    <Styled.Container style={{ right: fadeAnim }}>
      <Title style={{ textAlign: 'center' }}>Filtrar Alunos</Title>

      <Styled.BackContainer onPress={() => props.setOpen(false)}>
        <Feather name="x" color="#2d2d2d" size={28} />
      </Styled.BackContainer>

      <Styled.ScrollView
        contentContainerStyle={{
          width: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignUpForm ref={formRef} onSubmit={handleSubmit}>
          <SchoolCoursePicker formRef={formRef} backgroundColor="#fff" />

          <RowOptionsPicker
            name="school_year"
            label="Série"
            canDeselect
            options={SCHOOL_YEARS_ITEMS}
          />

          <RowOptionsPicker
            name="shift"
            label="Turno"
            canDeselect
            options={SHIFTS_ITEMS}
          />

          <SubjectsPicker
            label="Até 3 matérias que você deseja aprender"
            canDeselect
          />

          <RowOptionsPicker
            label="Gênero"
            name="gender"
            canDeselect
            options={[
              { label: 'Feminino', value: String(GENDERS_ENUM.FEMALE) },
              { label: 'Masculino', value: String(GENDERS_ENUM.MALE) },
            ]}
          />
        </SignUpForm>

        <PrimaryButton onPress={handlePressSubmit}>APLICAR</PrimaryButton>
      </Styled.ScrollView>
    </Styled.Container>
  )
}

export default FilterDrawer
