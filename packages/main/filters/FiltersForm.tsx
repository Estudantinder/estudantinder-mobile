import React, { Fragment, RefObject } from 'react'

import { FormHandles } from '@unform/core'

import RowOptionsPicker from 'packages/components/RowOptions/Picker'
import SchoolCoursePicker from 'packages/components/SchoolCoursePicker'
import SubjectsPicker from 'packages/components/SubjectsPicker'
import Course from 'packages/entities/Course'
import { GENDERS } from 'packages/entities/Gender'
import School from 'packages/entities/School'
import { SHIFTS } from 'packages/entities/Shift'
import { useToggleThemeContext } from 'packages/styles/context'

export interface FiltersInputs {
  formRef: RefObject<FormHandles>
  defaultSchool?: School
  defaultCourse?: Course
}

const FiltersInputs: React.FC<FiltersInputs> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <Fragment>
      <SchoolCoursePicker
        formRef={props.formRef}
        selectBackgroundStyle={{
          backgroundColor: theme.background.default,
          borderRadius: 2,
          minHeight: 36,
          padding: 4,
        }}
        selectContainerStyle={{
          width: '100%',
          marginTop: 0,
          marginBottom: 8,
        }}
        defaultCourse={props.defaultCourse}
        defaultSchool={props.defaultSchool}
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

      <RowOptionsPicker
        label="Gênero"
        name="gender"
        canDeselect
        options={[
          { label: 'Feminino', value: String(GENDERS.FEMALE) },
          { label: 'Masculino', value: String(GENDERS.MALE) },
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
    </Fragment>
  )
}

export default FiltersInputs
