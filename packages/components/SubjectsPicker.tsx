import React, { useEffect, useRef, useState } from 'react'
import { FlatList, View, ViewProps, ViewStyle } from 'react-native'

import { useField } from '@unform/core'

import useSubjectsData from 'packages/api/swr-hooks/useSubjectsData'
import RowOptionsButton from 'packages/components/RowOptions/Button'
import Subject from 'packages/entities/Subject'
import InputInfo from 'packages/inputs/components/InputInfo'
import { InputContainer, InputLabel } from 'packages/inputs/input.styles'

import { SubjectsPickerListContainer } from './components.styles'

export interface SubjectsPickerProps extends ViewProps {
  label: string
  canDeselect?: boolean
  buttonContainerStyle?: ViewStyle
}

const SubjectsPicker: React.FC<SubjectsPickerProps> = (props) => {
  const ref = useRef<ValueRef<View, Subject[]>>(null)

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
    <InputContainer ref={ref} testID="subjects" {...props}>
      <InputLabel>
        {!subjects || !subjects.length ? 'Carregando...' : props.label}
      </InputLabel>

      <SubjectsPickerListContainer>
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
                <RowOptionsButton
                  isActive={isActive}
                  onPress={() => handleSubjectsChange(item)}
                  containerStyle={props.buttonContainerStyle}
                >
                  {item.name}
                </RowOptionsButton>
              </View>
            )
          }}
          numColumns={2}
          scrollEnabled={false}
        />
      </SubjectsPickerListContainer>

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default SubjectsPicker
