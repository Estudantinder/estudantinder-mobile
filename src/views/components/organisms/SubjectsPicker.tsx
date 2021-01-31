import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View } from 'react-native'

import { useField } from '@unform/core'

import useSubjectsData from 'main/api/swr-hooks/useSubjectsData'
import Subject from 'main/entities/Subject'

import InputInfo from 'views/components/atoms/InputInfo'
import { InputContainer, InputLabel } from 'views/styles/globalStyles'

import OptionButton from '../atoms/OptionButton'

interface ViewRef extends View {
  value: Subject[]
}

export interface SubjectsPickerProps {
  label: string
  canDeselect?: boolean
}

const SubjectsPicker: React.FC<SubjectsPickerProps> = (props) => {
  const ref = useRef<ViewRef>(null)

  const { fieldName, defaultValue, registerField, error } = useField('subjects')

  const { subjects } = useSubjectsData()

  const [favoriteSubjects, setFavoriteSubjects] = useState<Subject[]>(
    defaultValue || []
  )

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'value',
    })

    ref?.current && (ref.current.value = defaultValue || [])
  }, [defaultValue, fieldName, registerField])

  function handleSubjectsChange(newSubject: Subject) {
    if (!ref.current)
      return setFavoriteSubjects([
        newSubject,
        favoriteSubjects[0],
        favoriteSubjects[1],
      ])

    let newSubjects = favoriteSubjects

    const favoriteSubjectIndex = favoriteSubjects.findIndex(
      (subject) => subject.id === newSubject.id
    )

    if (favoriteSubjectIndex >= 0) {
      if (!props.canDeselect) return

      const newSubjects = favoriteSubjects

      newSubjects.splice(favoriteSubjectIndex, 1)
    } else {
      if (favoriteSubjects.length > 2) newSubjects.pop()

      newSubjects = [newSubject, ...newSubjects]
    }

    ref.current.value = newSubjects

    return setFavoriteSubjects([...newSubjects])
  }

  return (
    <InputContainer ref={ref}>
      <InputLabel>
        {!subjects || !subjects.length ? 'Carregando' : props.label}
      </InputLabel>

      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <FlatList
          data={subjects}
          renderItem={({ item, index }) => {
            const isActive = favoriteSubjects
              .map((value) => String(value.id))
              .includes(String(item.id))

            return (
              <View
                style={{
                  marginRight: index % 2 === 0 ? 10 : 0,
                  marginTop: 12,
                  flex: 1,
                }}
              >
                <OptionButton
                  isActive={isActive}
                  onPress={() => handleSubjectsChange(item)}
                >
                  {item.name}
                </OptionButton>
              </View>
            )
          }}
          numColumns={2}
          scrollEnabled={false}
        />
      </View>

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default SubjectsPicker
