import React, { Fragment } from 'react'

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
          {props.subjects.map((value, index) => {
            if (props.subjects[index + 1]) {
              return (
                <Fragment key={value.id}>
                  <PrimaryLabel>{value.name.toUpperCase()}</PrimaryLabel>
                  <HorizontalDivider width={4} />
                </Fragment>
              )
            }

            return (
              <PrimaryLabel key={value.id}>
                {value.name.toUpperCase()}
              </PrimaryLabel>
            )
          })}
        </Row>
      </ShowStudentInfoContainer>
    </Row>
  )
}

export default ShowStudentSubjects
