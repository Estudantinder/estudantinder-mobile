import React from 'react'
import { useRef } from 'react'

import { Feather } from '@expo/vector-icons'
import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import Tooltip from 'rn-tooltip'

import PrimaryButton from 'packages/components/PrimaryButton'
import RowOptionsPicker from 'packages/components/RowOptions/Picker'
import SchoolCoursePicker from 'packages/components/SchoolCoursePicker'
import SubjectsPicker from 'packages/components/SubjectsPicker'
import { SHIFTS } from 'packages/entities/Shift'
import { Row } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'

import { useMainContext } from '../context'
import {
  FiltersContainer,
  FiltersBackContainer,
  FiltersTopBarTitle,
  FiltersTooltipText,
  FiltersScrollView,
} from './filters.styles'
import UpdateFiltersUseCase from './use-cases/update-filters'
import { FiltersFormData } from './use-cases/update-filters/UpdateFiltersSerializer'

export interface FiltersViewProps {
  closeDrawer(): void
}

const FiltersView = (props: FiltersViewProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null)

  const { reloadAllStudents } = useMainContext()

  async function handleSubmit(data: FiltersFormData) {
    try {
      await UpdateFiltersUseCase(data)

      await reloadAllStudents()
    } catch (error) {
      alertModal(error)
    }

    props.closeDrawer()
  }

  const submitForm = () => formRef.current?.submitForm()

  return (
    <FiltersContainer>
      <Row justifyContent="space-between" style={{ marginBottom: 16 }}>
        <Tooltip
          backgroundColor="#fff"
          height={100}
          width={220}
          actionType="press"
          popover={
            <FiltersTooltipText>
              Todas as preferências são opcionais, se deixadas em branco serão
              consideradas todas as opções.
            </FiltersTooltipText>
          }
        >
          <Feather name="help-circle" color="#2d2d2d" size={24} />
        </Tooltip>

        <FiltersTopBarTitle>Filtrar Alunos</FiltersTopBarTitle>

        <FiltersBackContainer onPress={props.closeDrawer}>
          <Feather name="x" color="#2d2d2d" size={24} />
        </FiltersBackContainer>
      </Row>

      <FiltersScrollView
        contentContainerStyle={{
          width: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Form
          style={{
            marginTop: 8,
            marginBottom: 12,
            width: '100%',
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <SchoolCoursePicker
            formRef={formRef}
            selectBackgroundStyle={{
              backgroundColor: '#fff',
              borderRadius: 2,
              minHeight: 36,
              padding: 4,
            }}
            selectContainerStyle={{
              width: '100%',
              marginTop: 0,
              marginBottom: 8,
            }}
          />

          <RowOptionsPicker
            name="school_year"
            label="Série"
            canDeselect
            options={[
              { label: '1º ano', value: '1' },
              { label: '2º ano', value: '2' },
              { label: '3º ano', value: '3' },
            ]}
            style={{ marginTop: 12 }}
            buttonsContainerStyle={{ height: 28 }}
          />

          <RowOptionsPicker
            name="shift"
            label="Turno"
            canDeselect
            options={[
              { label: 'Manhã', value: String(SHIFTS.MORNING) },
              { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
            ]}
            style={{ marginTop: 4 }}
            buttonsContainerStyle={{ height: 28 }}
          />

          <SubjectsPicker
            label="Até 3 matérias que você deseja aprender"
            canDeselect
            buttonContainerStyle={{ height: 32 }}
            style={{ marginTop: 8 }}
          />
        </Form>

        <PrimaryButton containerStyle={{ height: 36 }} onPress={submitForm}>
          APLICAR
        </PrimaryButton>
      </FiltersScrollView>
    </FiltersContainer>
  )
}

export default FiltersView
