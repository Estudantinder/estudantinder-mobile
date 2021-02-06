import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Student from 'main/entities/Student'

import PrimaryLabel from 'views/components/atoms/PrimaryLabel'
import { HorizontalDivider, Row } from 'views/styles/globalStyles'

import StudentDataAdapter from 'shared/StudentDataAdapter'

import Styled from './styles'

export interface CardProps {
  student: Student
}

const Card: React.FC<CardProps> = ({ student }) => {
  const router = useNavigation()

  const studentAdapter = new StudentDataAdapter(student)

  const handleNavigateToTargetProfile = () => {
    router.navigate('TargetProfile', {
      student: { ...student, birth_date: student.birth_date.getTime() },
    })
  }

  return (
    <Styled.Container>
      <Styled.Image resizeMode="cover" source={{ uri: student.photos[0] }} />

      <Styled.Footer>
        <Styled.ProfileButtonContainer>
          <Styled.ProfileButton onPress={handleNavigateToTargetProfile}>
            <MaterialCommunityIcons
              name="account-box"
              size={28}
              color="#a8a8a8"
            />
          </Styled.ProfileButton>
        </Styled.ProfileButtonContainer>

        <Row>
          <Styled.NameText>
            {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
          </Styled.NameText>
        </Row>

        <Styled.FooterText>
          {student.school &&
            studentAdapter.capitalize(student.school.address, 2)}{' '}
          - {student.course && studentAdapter.capitalize(student.course.name)}
        </Styled.FooterText>
        <Styled.FooterText>
          {student.school_year}º ano {student.classroom}{' '}
          {studentAdapter.getShift()}
        </Styled.FooterText>

        <Row style={{ marginTop: 6 }}>
          <PrimaryLabel>{student.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={4} />

          <PrimaryLabel>{student.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={4} />

          <PrimaryLabel>{student.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Card
