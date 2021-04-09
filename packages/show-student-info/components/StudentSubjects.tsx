import React from 'react'

import { Feather } from '@expo/vector-icons'

import SubjectsRow from 'packages/components/SubjectsRow'
import Subject from 'packages/entities/Subject'
import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import {
  ShowStudentInfoContainer,
  ShowStudentInfoHeader,
  ShowStudentInfoLabel,
} from '../show-student-info.styles'

export interface ShowStudentSubjectsProps {
  subjects: Subject[]
}

const ShowStudentSubjects: React.FC<ShowStudentSubjectsProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowStudentInfoContainer>
        <ShowStudentInfoHeader>
          <Feather name="book-open" size={20} color={theme.dark_purple} />
          <ShowStudentInfoLabel>Matérias com afinidade</ShowStudentInfoLabel>
        </ShowStudentInfoHeader>

        <SubjectsRow subjects={props.subjects} />
      </ShowStudentInfoContainer>
    </Row>
  )
}

export default ShowStudentSubjects
