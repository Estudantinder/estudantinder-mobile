import React from 'react'

import { Feather } from '@expo/vector-icons'

import PrimaryLabel from 'packages/components/PrimaryLabel'
import Subject from 'packages/entities/Subject'
import { Row, HorizontalDivider } from 'packages/styles'
import theme from 'packages/styles/theme'

import {
  ShowTargetStudentInfoContainer,
  ShowTargetStudentInfoHeader,
  ShowTargetStudentInfoLabel,
} from '../show-target-info.styles'

export interface ShowTargetStudentSubjectsProps {
  subjects: Subject[]
}

const ShowTargetStudentSubjects: React.FC<ShowTargetStudentSubjectsProps> = (
  props
) => {
  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowTargetStudentInfoContainer>
        <ShowTargetStudentInfoHeader>
          <Feather
            name="book-open"
            size={20}
            color={theme.colors.secondary.dark_purple}
          />
          <ShowTargetStudentInfoLabel>
            Matérias com afinidade
          </ShowTargetStudentInfoLabel>
        </ShowTargetStudentInfoHeader>

        <Row>
          <PrimaryLabel>{props.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{props.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{props.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </ShowTargetStudentInfoContainer>
    </Row>
  )
}

export default ShowTargetStudentSubjects
