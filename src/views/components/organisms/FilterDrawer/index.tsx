import React, { useEffect, useRef } from 'react'
import { BackHandler, Dimensions } from 'react-native'
import Animated, { Easing } from 'react-native-reanimated'

import { Feather } from '@expo/vector-icons'
import { FormHandles } from '@unform/core'

import OptionButton from 'views/components/atoms/OptionButton'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import {
  HorizontalDivider,
  InputContainer,
  InputLabel,
  Row,
  SignUpForm,
  Title,
} from 'views/styles/globalStyles'

import SchoolCoursePicker from '../SchoolCoursePicker'

import Styled from './styles'

export interface FilterDrawerProps {
  open: boolean
  setOpen(value: boolean): void
}

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
  const INITIAL_VALUE = -Dimensions.get('window').width - 24

  const fadeAnim = useRef(new Animated.Value(INITIAL_VALUE)).current

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
  }, [INITIAL_VALUE, fadeAnim, props])

  BackHandler.addEventListener('hardwareBackPress', () => {
    if (props.open) {
      props.setOpen(false)
      return true
    }

    BackHandler.exitApp()

    return true
  })

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
        <SignUpForm ref={formRef} onSubmit={() => 0}>
          <SchoolCoursePicker formRef={formRef} backgroundColor="#fff" />

          <InputContainer>
            <InputLabel>Gênero</InputLabel>

            <Row>
              <OptionButton onPress={() => 0} isActive>
                Feminino
              </OptionButton>

              <HorizontalDivider />

              <OptionButton onPress={() => 0} isActive={false}>
                Masculino
              </OptionButton>
            </Row>

            <Row style={{ marginVertical: 12 }}>
              <OptionButton onPress={() => 0} isActive={false}>
                Outros
              </OptionButton>
            </Row>
          </InputContainer>
        </SignUpForm>

        <PrimaryButton onPress={() => 0}>APLICAR</PrimaryButton>
      </Styled.ScrollView>
    </Styled.Container>
  )
}

export default FilterDrawer
