import React from 'react'

import { Feather } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import Student from 'packages/entities/Student'
import { Row, Title } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import ShowStudentBio from './components/StudentBio'
import ShowStudentPhotos from './components/StudentPhotos'
import ShowStudentSchool from './components/StudentSchool'
import ShowStudentSubjects from './components/StudentSubjects'
import {
  ShowStudentContainer,
  ShowStudentInfoContainer,
  ShowStudentInfoLabel,
  ShowStudentProfileImage,
} from './show-student-info.styles'

export interface ShowStudentProps {
  student: Student
}

const ShowStudent: React.FC<ShowStudentProps> = (props) => {
  const { theme } = useToggleThemeContext()

  const studentAdapter = new StudentDataAdapter(props.student)

  return (
    <ShowStudentContainer>
      <Row justifyContent="center" style={{ marginVertical: 24 }}>
        <ShowStudentProfileImage source={{ uri: props.student.photos[0] }} />
      </Row>

      <Title style={{ textAlign: 'center' }}>
        {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
      </Title>

      <ShowStudentBio bio={props.student.bio} />

      <ShowStudentPhotos photos={props.student.photos} />

      {props.student.gender ? (
        <Row style={{ paddingHorizontal: 16 }}>
          <ShowStudentInfoContainer>
            <Row>
              <Feather name="flag" size={20} color={theme.dark_purple} />
              <ShowStudentInfoLabel>
                Gênero: {studentAdapter.getGender()}
              </ShowStudentInfoLabel>
            </Row>
          </ShowStudentInfoContainer>
        </Row>
      ) : null}

      <ShowStudentSchool studentAdapter={studentAdapter} />

      <ShowStudentSubjects subjects={props.student.subjects} />

      {props.children}
    </ShowStudentContainer>
  )
}

export default ShowStudent
