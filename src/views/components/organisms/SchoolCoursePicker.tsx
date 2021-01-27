import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { FormHandles } from '@unform/core'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import { useSignUpContext } from 'main/context/sign-up'
import School from 'main/entities/School'

import arrayToItems from 'views/utils/arrayToItems'

import Select from '../molecules/Select'

export interface SchoolCoursePickerProps {
  formRef: React.RefObject<FormHandles>
}

const SchoolCoursePicker: React.FC<SchoolCoursePickerProps> = (props) => {
  const { schools, error } = useSchoolsData()
  const ctx = useSignUpContext()

  const [currentSchool, setCurrentSchool] = useState<School | undefined>(
    ctx.school?.school
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
      />
    </View>
  )
}

export default SchoolCoursePicker
