import React, { useEffect, useRef, useState } from 'react'
import { Text, View } from 'react-native'

import { useField } from '@unform/core'

import OptionButton from 'src/components/OptionButton'

const items = [
  { name: 'Artes', id: '1' },
  { name: 'Biologia', id: '2' },
  { name: 'Educação Física', id: '3' },
  { name: 'Espanhol', id: '4' },
  { name: 'Filosofia', id: '5' },
  { name: 'Física', id: '6' },
  { name: 'Geografia', id: '7' },
  { name: 'História', id: '8' },
  { name: 'Inglês', id: '9' },
  { name: 'Literatura', id: '10' },
  { name: 'Matemática', id: '11' },
  { name: 'Português', id: '12' },
  { name: 'Química', id: '13' },
  { name: 'Sociologia', id: '14' },
]

interface ViewRef extends View {
  value: string[]
}

const SubjectsPicker: React.FC = () => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField('subjects')

  const [subjects, setSubjects] = useState<string[]>(defaultValue || [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue || [])
  }, [defaultValue, fieldName, registerField])

  function handleSubjectsChange(newSubjectId: string) {
    if (subjects.includes(newSubjectId)) {
      return
    }

    if (subjects.length > 2) {
      const newSubjects = [newSubjectId, subjects[0], subjects[1]]

      ref?.current && (ref.current.value = newSubjects)

      return setSubjects(newSubjects)
    }
    const newSubjects = [newSubjectId, ...subjects]

    ref?.current && (ref.current.value = newSubjects)

    return setSubjects(newSubjects)
  }

  return (
    <View ref={ref}>
      <Text>Escolha 03 matérias que você tem afinidade</Text>
      <Text>{error}</Text>
      {items.map((item, index) => {
        if (index % 2 !== 0) return
        return (
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              width: items[index + 1] ? undefined : '50%',
            }}
            key={item.id}
          >
            <OptionButton
              onPress={() => handleSubjectsChange(item.id)}
              label={item.name}
              isActive={subjects.includes(item.id)}
            />
            {items[index + 1] && (
              <OptionButton
                onPress={() => handleSubjectsChange(items[index + 1].id)}
                label={items[index + 1].name}
                isActive={subjects.includes(items[index + 1].id)}
              />
            )}
          </View>
        )
      })}
    </View>
  )
}

export default SubjectsPicker
