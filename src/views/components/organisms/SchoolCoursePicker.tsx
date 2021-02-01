import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { FormHandles } from '@unform/core'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import School from 'main/entities/School'

import arrayToItems from 'views/utils/arrayToItems'

import Select from '../molecules/Select'

export interface SchoolCoursePickerProps {
  formRef: React.RefObject<FormHandles>
  backgroundColor?: string
  defaultSchool?: School
}

const SchoolCoursePicker: React.FC<SchoolCoursePickerProps> = (props) => {
  const { schools, error } = useSchoolsData()

  const [currentSchool, setCurrentSchool] = useState<School | undefined>(
    props.defaultSchool
  )

  const getCurrentSchool = useCallback(
    (schoolId: string) => {
      const school = schools?.find((value) => value.id === String(schoolId))

      props.formRef.current?.setFieldValue('course', undefined)

      setCurrentSchool(school)
    },
    [props.formRef, schools]
  )

  return (
    <View>
      <Select
        name="school"
        label="Escola"
        placeholder={{
          label: 'Escolha uma escola',
          value: null,
          color: '#ccc',
        }}
        info={error?.name}
        items={
          schools
            ? arrayToItems(schools, {
                label: 'address',
                value: 'id',
              })
            : []
        }
        disabled={!schools || !schools.length}
        onValueChange={getCurrentSchool}
        backgroundColor={props.backgroundColor}
      />

      <Select
        name="course"
        label="Curso"
        placeholder={{
          label: 'Escolha um curso',
          value: null,
          color: '#ccc',
        }}
        info={!currentSchool ? 'Selecione uma escola primeiro!' : undefined}
        items={
          currentSchool
            ? arrayToItems(currentSchool.courses, {
                label: 'name',
                value: 'id',
              })
            : []
        }
        disabled={!currentSchool}
        backgroundColor={props.backgroundColor}
      />
    </View>
  )
}

export default SchoolCoursePicker
