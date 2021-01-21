import React, { useEffect, useRef } from 'react'
import { BackHandler, Dimensions, ScrollView } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'
import Animated, { Easing } from 'react-native-reanimated'

import { Feather } from '@expo/vector-icons'
import { FormHandles } from '@unform/core'

import OptionButton from 'views/components/atoms/OptionButton'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import {
  HorizontalDivider,
  InputLabel,
  Row,
  SignUpForm,
  Title,
} from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

import { SHIFTS } from 'shared/constants'

import SignUpSubjectsPicker from '../SubjectsPicker'

export interface FilterDrawerProps {
  open: boolean
  setOpen(value: boolean): void
}

const FilterDrawer: React.FC<FilterDrawerProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(-280)).current

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
        toValue: -Dimensions.get('window').width - 24,
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

  BackHandler.addEventListener('hardwareBackPress', () => {
    if (props.open) {
      props.setOpen(false)
      return true
    }

    BackHandler.exitApp()

    return true
  })

  return (
    <Animated.View
      style={{
        position: 'absolute',
        top: 0,
        right: fadeAnim,
        height: Dimensions.get('window').height - 44,
        width: Dimensions.get('window').width - 24,
        backgroundColor: theme.colors.background.light_purple,
        paddingTop: 50,
        paddingHorizontal: 20,
      }}
    >
      <Title style={{ textAlign: 'center' }}>Filtrar Alunos</Title>

      <BorderlessButton
        onPress={() => props.setOpen(false)}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: 52,
          right: 20,
        }}
      >
        <Feather name="x" color="#2d2d2d" size={28} />
      </BorderlessButton>

      <ScrollView
        style={{
          flex: 1,
          width: '100%',
        }}
        contentContainerStyle={{
          minHeight: '100%',
          width: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignUpForm ref={formRef} onSubmit={() => 0}>
          <RowOptionsPicker
            label="Série"
            name="school_year"
            options={[
              { label: '1º ano', value: '1' },
              { label: '2º ano', value: '2' },
              { label: '3º ano', value: '3' },
            ]}
          />
          <RowOptionsPicker
            label="Série"
            name="school_year"
            options={[
              { label: '1º ano', value: '1' },
              { label: '2º ano', value: '2' },
              { label: '3º ano', value: '3' },
            ]}
          />
          <RowOptionsPicker
            label="Série"
            name="school_year"
            options={[
              { label: '1º ano', value: '1' },
              { label: '2º ano', value: '2' },
              { label: '3º ano', value: '3' },
            ]}
          />

          <SignUpSubjectsPicker />

          <RowOptionsPicker
            label="Turno"
            name="shift"
            options={[
              { label: 'Manhã', value: String(SHIFTS.MORNING) },
              { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
            ]}
          />

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
        </SignUpForm>

        <PrimaryButton onPress={() => 0}>APLICAR</PrimaryButton>
      </ScrollView>
    </Animated.View>
  )
}

export default FilterDrawer
