import React, { useCallback, useState } from 'react'
import { View } from 'react-native'

import { FormHandles } from '@unform/core'

import useSchoolsData from 'packages/api/swr-hooks/useSchoolsData'
import Select from 'packages/components/Select'
import Course from 'packages/entities/Course'
import School from 'packages/entities/School'
import arrayToItems from 'packages/utils/arrayToItems'

export interface SchoolCoursePickerProps {
  formRef: React.RefObject<FormHandles>
  backgroundColor?: string
  defaultSchool?: School
  defaultCourse?: Course
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

  const getDefaultCourse = useCallback(() => {
    if (!props.defaultCourse) return ''

    const courseIds = currentSchool?.courses.map((course) => course.id)

    if (courseIds?.includes(String(props.defaultCourse.id)))
      return props.defaultCourse.id

    return ''
  }, [currentSchool?.courses, props.defaultCourse])

  return (
    <View>
      <Select
        testID="school"
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
        testID="course"
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
        defaultValue={getDefaultCourse()}
      />
    </View>
  )
}

export default SchoolCoursePicker
