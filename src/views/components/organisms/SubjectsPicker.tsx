import React, { Fragment, useEffect, useRef, useState } from 'react'
import { View } from 'react-native'

import { useField } from '@unform/core'

import useSubjectsData from 'main/api/swr-hooks/useSubjectsData'
import Subject from 'main/entities/Subject'

import InputInfo from 'views/components/atoms/InputInfo'
import OptionButton from 'views/components/atoms/OptionButton'
import {
  HorizontalDivider,
  InputContainer,
  InputLabel,
  Row,
} from 'views/styles/globalStyles'

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

    if (favoriteSubjectIndex + 1) {
      if (!props.canDeselect) return

      const newSubjects = favoriteSubjects

      newSubjects.splice(favoriteSubjectIndex, 1)
    } else {
      if (favoriteSubjects.length > 2) newSubjects.pop()

      newSubjects = [newSubject, ...newSubjects]
    }

    ref.current.value = newSubjects

    return setFavoriteSubjects(newSubjects)
  }

  return (
    <InputContainer ref={ref}>
      <InputLabel>
        {!subjects || !subjects.length ? 'Carregando' : props.label}
      </InputLabel>

      {subjects?.map((subject, index) => {
        if (index % 2 !== 0) return

        return (
          <Row
            style={{
              marginBottom: subjects[index + 1] ? 12 : 0,
              width: subjects[index + 1] ? '100%' : '48%',
            }}
            key={subject.id}
          >
            <OptionButton
              onPress={() => handleSubjectsChange(subject)}
              isActive={
                !!favoriteSubjects.find((value) => value.id === subject.id)
              }
            >
              {subject.name}
            </OptionButton>

            {subjects[index + 1] && (
              <Fragment>
                <HorizontalDivider />

                <OptionButton
                  onPress={() => handleSubjectsChange(subjects[index + 1])}
                  isActive={
                    !!favoriteSubjects.find(
                      (value) => value.id === subjects[index + 1].id
                    )
                  }
                >
                  {subjects[index + 1].name}
                </OptionButton>
              </Fragment>
            )}
          </Row>
        )
      })}

      <InputInfo>{error}</InputInfo>
    </InputContainer>
  )
}

export default SubjectsPicker
