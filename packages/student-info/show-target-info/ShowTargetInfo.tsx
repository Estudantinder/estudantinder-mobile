import React from 'react'

import { Feather } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import Student from 'packages/entities/Student'
import { Row, Title } from 'packages/styles'
import theme from 'packages/styles/theme'

import ShowTargetStudentBio from './components/StudentBio'
import ShowTargetStudentPhotos from './components/StudentPhotos'
import ShowTargetStudentSchool from './components/StudentSchool'
import ShowTargetStudentSubjects from './components/StudentSubjects'
import {
  ShowTargetStudentContainer,
  ShowTargetStudentInfoContainer,
  ShowTargetStudentInfoLabel,
} from './show-target-info.styles'

export interface ShowTargetStudentProps {
  student: Student
}

const ShowTargetStudent: React.FC<ShowTargetStudentProps> = ({ student }) => {
  const studentAdapter = new StudentDataAdapter(student)

  return (
    <ShowTargetStudentContainer>
      <Title style={{ textAlign: 'center' }}>
        {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
      </Title>

      <ShowTargetStudentBio bio={student.bio} />

      <ShowTargetStudentPhotos photos={student.photos} />

      {student.gender ? (
        <ShowTargetStudentInfoContainer>
          <Row>
            <Feather
              name="flag"
              size={20}
              color={theme.colors.secondary.dark_purple}
            />
            <ShowTargetStudentInfoLabel>
              Gênero: {studentAdapter.getGender()}
            </ShowTargetStudentInfoLabel>
          </Row>
        </ShowTargetStudentInfoContainer>
      ) : null}

      <ShowTargetStudentSchool studentAdapter={studentAdapter} />

      <ShowTargetStudentSubjects subjects={student.subjects} />
    </ShowTargetStudentContainer>
  )
}

export default ShowTargetStudent
