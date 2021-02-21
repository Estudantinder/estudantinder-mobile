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
  ShowTargetStudentProfileImage,
} from './show-target-info.styles'

export interface ShowTargetStudentProps {
  student: Student
}

const ShowTargetStudent: React.FC<ShowTargetStudentProps> = (props) => {
  const studentAdapter = new StudentDataAdapter(props.student)

  return (
    <ShowTargetStudentContainer>
      <Row justifyContent="center" style={{ marginVertical: 24 }}>
        <ShowTargetStudentProfileImage
          source={{ uri: props.student.photos[0] }}
        />
      </Row>

      <Title style={{ textAlign: 'center' }}>
        {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
      </Title>

      <ShowTargetStudentBio bio={props.student.bio} />

      <ShowTargetStudentPhotos photos={props.student.photos} />

      {props.student.gender ? (
        <Row style={{ paddingHorizontal: 16 }}>
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
        </Row>
      ) : null}

      <ShowTargetStudentSchool studentAdapter={studentAdapter} />

      <ShowTargetStudentSubjects subjects={props.student.subjects} />

      {props.children}
    </ShowTargetStudentContainer>
  )
}

export default ShowTargetStudent
