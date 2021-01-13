import React, { ReactText, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'
import { Item } from 'react-native-picker-select'

import { useField } from '@unform/core'

import useSchoolsData from 'main/api/useSchoolsData'
import School from 'main/entities/School'

import InputBottom from 'views/components/atoms/InputBottom'
import Select from 'views/components/atoms/Select'

interface ViewRef extends View {
  value: string
}

function getSelectedSchool(
  schools?: School[],
  defaultValue?: string
): string | undefined {
  if (!defaultValue || !schools) return

  const selectedSchool = schools.find((school) => {
    const course = school.courses.find((course) => course.id === defaultValue)

    return !!course
  })

  return selectedSchool?.id
}

const SignUpCoursePicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { schools, loading } = useSchoolsData()

  const { fieldName, defaultValue, registerField, error } = useField(
    'course_id'
  )

  const [selectedSchool, setSelectedSchool] = useState(
    getSelectedSchool(schools, defaultValue)
  )

  const [selectedCourse, setSelectedCourse] = useState(defaultValue)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue)
  }, [defaultValue, fieldName, registerField])

  function handleChangeCourse(value: ReactText) {
    const newCourse = String(value)

    ref?.current && (ref.current.value = newCourse)

    setSelectedCourse(newCourse)
  }

  function getSchoolItems(): Item[] {
    if (schools) {
      return schools.map((school) => ({
        label: school.address,
        value: String(school.id),
      }))
    }

    return []
  }

  function getCourseItems(): Item[] {
    if (schools && selectedSchool) {
      const school = schools.find((school) => selectedSchool == school.id)

      if (!school) return []

      return school.courses.map((course) => ({
        label: course.name,
        value: String(course.id),
      }))
    }

    return []
  }

  return (
    <View ref={ref}>
      <Select
        label="Escola"
        disabled={loading || !schools}
        items={getSchoolItems()}
        onValueChange={(value) => setSelectedSchool(String(value))}
        value={selectedSchool}
      />

      <Select
        label="Curso"
        disabled={loading || !selectedSchool}
        items={getCourseItems()}
        onValueChange={handleChangeCourse}
        value={selectedCourse}
      />

      <InputBottom text={error} />
    </View>
  )
}

export default SignUpCoursePicker
