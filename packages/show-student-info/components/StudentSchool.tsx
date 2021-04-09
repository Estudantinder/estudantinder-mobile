import React from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'
import capitalize from 'packages/utils/capitalize'

import {
  ShowStudentInfoContainer,
  ShowStudentInfoHeader,
  ShowStudentInfoLabel,
  ShowStudentSchoolRow,
  ShowStudentSchoolContent,
  ShowStudentSchoolLabel,
} from '../show-student-info.styles'

export interface ShowStudentSchoolProps {
  studentAdapter: StudentDataAdapter
}

const ShowStudentSchool: React.FC<ShowStudentSchoolProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <Row style={{ paddingHorizontal: 16 }}>
      <ShowStudentInfoContainer>
        <ShowStudentInfoHeader>
          <Feather name="award" size={20} color={theme.dark_purple} />
          <ShowStudentInfoLabel>Informações escolares</ShowStudentInfoLabel>
        </ShowStudentInfoHeader>

        <ShowStudentSchoolRow>
          <ShowStudentSchoolContent>
            <ShowStudentSchoolLabel>
              {capitalize(props.studentAdapter.student.school.address)} -{' '}
              {capitalize(props.studentAdapter.student.course.name)}
            </ShowStudentSchoolLabel>
            <ShowStudentSchoolLabel>
              Turno: {props.studentAdapter.getShift()}
            </ShowStudentSchoolLabel>
          </ShowStudentSchoolContent>

          <View>
            <ShowStudentSchoolLabel>
              Série: {props.studentAdapter.student.school_year}º ano
            </ShowStudentSchoolLabel>
            <ShowStudentSchoolLabel>
              Sala: {props.studentAdapter.student.classroom.toUpperCase()}
            </ShowStudentSchoolLabel>
          </View>
        </ShowStudentSchoolRow>
      </ShowStudentInfoContainer>
    </Row>
  )
}

export default ShowStudentSchool
