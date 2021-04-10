import React, { useEffect, useState } from 'react'
import { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import PrimaryButton from 'packages/components/PrimaryButton'
import Filter from 'packages/entities/Filter'
import alertModal from 'packages/utils/alertModal'

import { useMainContext } from '../context'
import { FiltersContainer, FiltersScrollView } from './filters.styles'
import FiltersInputs from './FiltersForm'
import FiltersTopBar from './FiltersTopBar'
import GetFiltersUseCase from './use-cases/get-filters'
import UpdateFiltersUseCase from './use-cases/update-filters'
import { FiltersFormData } from './use-cases/update-filters/UpdateFiltersSerializer'

export interface FiltersViewProps {
  closeDrawer(): void
}

const FiltersView = (props: FiltersViewProps): JSX.Element => {
  const formRef = useRef<FormHandles>(null)

  const [filters, setFilters] = useState<Filter>()

  const { reloadAllStudents } = useMainContext()

  useEffect(() => {
    GetFiltersUseCase().then(setFilters).catch(alertModal)
  }, [])

  async function handleSubmit(data: FiltersFormData) {
    try {
      await UpdateFiltersUseCase({
        ...data,
        course: Number(data.course),
        school: Number(data.school),
      })

      await reloadAllStudents()
    } catch (error) {
      alertModal(error)
    }

    props.closeDrawer()
  }

  const submitForm = () => formRef.current?.submitForm()

  return (
    <FiltersContainer>
      <FiltersScrollView
        contentContainerStyle={{
          width: '100%',
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <FiltersTopBar closeDrawer={props.closeDrawer} />

        <Form
          style={{
            marginTop: 8,
            marginBottom: 12,
            width: '100%',
          }}
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            ...filters,
            school: filters?.school?.id,
            course: filters?.course?.id,
          }}
        >
          <FiltersInputs
            defaultCourse={filters?.course}
            defaultSchool={filters?.school}
            formRef={formRef}
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
