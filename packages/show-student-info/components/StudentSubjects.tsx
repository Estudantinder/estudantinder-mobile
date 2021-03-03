import React from 'react'

import { Feather } from '@expo/vector-icons'

import PrimaryLabel from 'packages/components/PrimaryLabel'
import Subject from 'packages/entities/Subject'
import { Row, HorizontalDivider } from 'packages/styles'
import theme from 'packages/styles/theme'

import {
  ShowStudentInfoContainer,
  ShowStudentInfoHeader,
  ShowStudentInfoLabel,
} from '../show-student-info.styles'

export interface ShowStudentSubjectsProps {
  subjects: Subject[]
}

const ShowStudentSubjects: React.FC<ShowStudentSubjectsProps> = (props) => {
  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowStudentInfoContainer>
        <ShowStudentInfoHeader>
          <Feather
            name="book-open"
            size={20}
            color={theme.colors.secondary.dark_purple}
          />
          <ShowStudentInfoLabel>Matérias com afinidade</ShowStudentInfoLabel>
        </ShowStudentInfoHeader>

        <Row>
          <PrimaryLabel>{props.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{props.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{props.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </ShowStudentInfoContainer>
    </Row>
  )
}

export default ShowStudentSubjects
