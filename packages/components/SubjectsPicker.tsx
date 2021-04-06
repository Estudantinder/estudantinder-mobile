import React, { useEffect, useRef, useState } from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

import { useField } from '@unform/core'

import useSubjectsData from 'packages/api/swr-hooks/useSubjectsData'
import Subject from 'packages/entities/Subject'
import InputInfo from 'packages/inputs/components/InputInfo'
import { InputContainer, InputLabel } from 'packages/inputs/input.styles'

import SubjectsPickerList from './SubjectsPickerList'

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
  }, [fieldName, registerField])

  useEffect(() => {
    ref?.current && (ref.current.value = defaultValue || [])
    setFavoriteSubjects(defaultValue || [])
  }, [defaultValue])

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

      <SubjectsPickerList
        data={subjects}
        favorites={favoriteSubjects}
        onSubjectPress={handleSubjectsChange}
        buttonContainerStyle={props.buttonContainerStyle}
      />

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default SubjectsPicker
