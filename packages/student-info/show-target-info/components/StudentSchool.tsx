import React from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import theme from 'packages/styles/theme'
import capitalize from 'packages/utils/capitalize'

import {
  ShowTargetStudentInfoContainer,
  ShowTargetStudentInfoHeader,
  ShowTargetStudentInfoLabel,
  ShowTargetStudentSchoolRow,
  ShowTargetStudentSchoolContent,
  ShowTargetStudentSchoolLabel,
} from '../show-target-info.styles'

export interface ShowTargetStudentSchoolProps {
  studentAdapter: StudentDataAdapter
}

const ShowTargetStudentSchool: React.FC<ShowTargetStudentSchoolProps> = (
  props
) => {
  return (
    <ShowTargetStudentInfoContainer>
      <ShowTargetStudentInfoHeader>
        <Feather
          name="award"
          size={20}
          color={theme.colors.secondary.dark_purple}
        />
        <ShowTargetStudentInfoLabel>
          Informações escolares
        </ShowTargetStudentInfoLabel>
      </ShowTargetStudentInfoHeader>

      <ShowTargetStudentSchoolRow>
        <ShowTargetStudentSchoolContent>
          <ShowTargetStudentSchoolLabel>
            {capitalize(props.studentAdapter.student.school.address)} -{' '}
            {capitalize(props.studentAdapter.student.course.name)}
          </ShowTargetStudentSchoolLabel>
          <ShowTargetStudentSchoolLabel>
            Turno: {props.studentAdapter.getShift()}
          </ShowTargetStudentSchoolLabel>
        </ShowTargetStudentSchoolContent>

        <View>
          <ShowTargetStudentSchoolLabel>
            Série: {props.studentAdapter.student.school_year}º ano
          </ShowTargetStudentSchoolLabel>
          <ShowTargetStudentSchoolLabel>
            Sala: {props.studentAdapter.student.classroom.toUpperCase()}
          </ShowTargetStudentSchoolLabel>
        </View>
      </ShowTargetStudentSchoolRow>
    </ShowTargetStudentInfoContainer>
  )
}

export default ShowTargetStudentSchool
