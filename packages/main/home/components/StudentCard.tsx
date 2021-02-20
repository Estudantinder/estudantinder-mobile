import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import PrimaryLabel from 'packages/components/PrimaryLabel'
import Student from 'packages/entities/Student'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { Row, HorizontalDivider } from 'packages/styles'
import capitalize from 'packages/utils/capitalize'

import {
  StudentCardContainer,
  StudentCardFooter,
  StudentCardFooterText,
  StudentCardImage,
  StudentCardNameText,
  StudentCardProfileButton,
  StudentCardProfileButtonContainer,
} from './home-components.styles'

export interface StudentCardProps {
  student: Student
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const router = useNavigation()

  const studentAdapter = new StudentDataAdapter(student)

  const handleNavigateToTargetProfile = () => {
    router.navigate(AUTHENTICATED_ROUTES.TARGET_PROFILE, {
      student: { ...student, birth_date: student.birth_date.getTime() },
    })
  }

  return (
    <StudentCardContainer>
      <StudentCardImage
        resizeMode="cover"
        source={{ uri: student.photos[0] }}
      />

      <StudentCardFooter>
        <StudentCardProfileButtonContainer>
          <StudentCardProfileButton onPress={handleNavigateToTargetProfile}>
            <MaterialCommunityIcons
              name="account-box"
              size={28}
              color="#a8a8a8"
            />
          </StudentCardProfileButton>
        </StudentCardProfileButtonContainer>

        <Row>
          <StudentCardNameText>
            {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
          </StudentCardNameText>
        </Row>

        <StudentCardFooterText>
          {capitalize(student.school.address, 2)} -{' '}
          {capitalize(student.course.name)}
        </StudentCardFooterText>
        <StudentCardFooterText>
          {student.school_year}º ano {student.classroom}{' '}
          {studentAdapter.getShift()}
        </StudentCardFooterText>

        <Row style={{ marginTop: 6 }}>
          <PrimaryLabel>{student.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={4} />

          <PrimaryLabel>{student.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={4} />

          <PrimaryLabel>{student.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </StudentCardFooter>
    </StudentCardContainer>
  )
}

export default StudentCard
