import { Picker } from '@react-native-picker/picker'
import React, { ReactText, useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import School from 'main/entities/School'

interface ViewRef extends View {
  value: string
}

const items: School[] = [
  {
    courses: [{ id: '1', name: 'Informática' }],
    name: 'Jardim Belval',
    id: '1',
  },
  { courses: [{ id: '2', name: 'Redes' }], name: 'Parque viana', id: '2' },
]

const SignUpCoursePicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField(
    'course_id'
  )

  const [selectedSchool, setSelectedSchool] = useState(
    () =>
      items.find((school) =>
        school.courses.find((course) => course.id === defaultValue)
      )?.id
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

  return (
    <View ref={ref}>
      <Text>Escola</Text>

      <Picker
        selectedValue={selectedSchool}
        onValueChange={(itemValue) => setSelectedSchool(String(itemValue))}
      >
        <Picker.Item label="Selecione sua escola" value="" color="#c0c0c0" />
        {items.map((item) => (
          <Picker.Item
            label={item.name}
            value={item.id}
            key={`school-${item.id}`}
            color="#000"
          />
        ))}
      </Picker>
      <Text>Curso</Text>

      <Picker
        selectedValue={selectedCourse}
        onValueChange={handleChangeCourse}
        enabled={selectedSchool !== ''}
      >
        <Picker.Item
          label={
            selectedSchool !== ''
              ? 'Selecione seu item'
              : 'Selecione sua escola primeiro!'
          }
          value=""
          color="#c0c0c0"
        />
        {items
          .find((item) => selectedSchool === item.id)
          ?.courses.map((item) => (
            <Picker.Item
              label={item.name}
              value={item.id}
              key={`course-${item.id}`}
              color="#000"
            />
          ))}
      </Picker>

      <Text>{error}</Text>
    </View>
  )
}

export default SignUpCoursePicker
