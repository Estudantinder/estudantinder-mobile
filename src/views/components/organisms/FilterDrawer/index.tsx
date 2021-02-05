import React, { useEffect, useRef } from 'react'
import { Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'

import { Feather } from '@expo/vector-icons'
import { FormHandles } from '@unform/core'
import Tooltip from 'rn-tooltip'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import { useStudentsContext } from 'main/context/students'
import Subject from 'main/entities/Subject'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import { Row, SignUpForm } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import {
  GENDERS_ENUM,
  SCHOOL_YEARS_ITEMS,
  SHIFTS,
  SHIFTS_ITEMS,
} from 'shared/constants'

import SchoolCoursePicker from '../SchoolCoursePicker'
import SubjectsPicker from '../SubjectsPicker'

import Styled from './styles'

export interface FiltersFormData {
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

  const { updateFilters } = useStudentsContext()

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
      return fadeIn()
    }

    return fadeOut()
  }, [fadeAnim, props])

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  async function handleSubmit(data: FiltersFormData) {
    const school = schools?.find((value) => String(value.id) === data.school)

    const course = school?.courses.find(
      (value) => String(value.id) === data.course
    )

    try {
      await updateFilters({ ...data, school, course })
    } catch (error) {
      triggerCorrectAlert(error)
    }

    props.setOpen(false)
  }

  return (
    <Styled.Container style={{ right: fadeAnim }}>
      <Row style={{ justifyContent: 'space-between' }}>
        <Styled.BackContainer onPress={() => props.setOpen(false)}>
          <Feather name="x" color="#2d2d2d" size={24} />
        </Styled.BackContainer>

        <Styled.TopBarTitle>Filtrar Alunos</Styled.TopBarTitle>

        <Tooltip
          backgroundColor="#fff"
          height={100}
          width={220}
          actionType="press"
          popover={
            <Styled.TooltipText>
              Todas as preferências são opcionais, se deixadas em branco serão
              consideradas todas as opções.
            </Styled.TooltipText>
          }
        >
          <Feather name="help-circle" color="#2d2d2d" size={24} />
        </Tooltip>
      </Row>

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
