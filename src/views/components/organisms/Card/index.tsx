import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Student from 'main/entities/Student'

import PrimaryLabel from 'views/components/atoms/PrimaryLabel'
import { HorizontalDivider, Row } from 'views/styles/globalStyles'

import { SHIFTS } from 'shared/constants'

import Styled from './styles'

export interface CardProps {
  student: Student
}

const Card: React.FC<CardProps> = ({ student }) => {
  const router = useNavigation()

  const getStudentName = () => {
    const nameArray = student.name.split(' ')

    const firstName = nameArray[0]

    const lastName = nameArray[nameArray.length - 1]

    return `${firstName} ${lastName}`
  }

  const getAge = () => {
    const ageDifMs = Date.now() - new Date(student.birth_date).getTime()
    const ageDate = new Date(ageDifMs)
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  const getShift = () => {
    if (SHIFTS.MORNING === student.shift) return 'Manhã'
    if (SHIFTS.AFTERNOON === student.shift) return 'Tarde'
  }

  const capitalize = (value: string, len?: number) => {
    return value
      .toLowerCase()
      .split(' ')
      .map((word) => {
        if (word.length <= (len || 4)) return word

        return word.charAt(0).toUpperCase() + word.substring(1)
      })
      .join(' ')
  }

  const handleNavigateToTargetProfile = () => {
    router.navigate('TargetProfile', { student })
  }

  return (
    <Styled.Container>
      <Styled.Image />

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
            {getStudentName()}, {getAge()}
          </Styled.NameText>
        </Row>

        <Styled.FooterText>
          {student.school && capitalize(student.school.address, 2)} -{' '}
          {student.course && capitalize(student.course.name)}
        </Styled.FooterText>
        <Styled.FooterText>
          {student.school_year}º ano {student.classroom} {getShift()}
        </Styled.FooterText>

        <Row style={{ marginTop: 12 }}>
          <PrimaryLabel>{student.subjects[0].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{student.subjects[1].name.toUpperCase()}</PrimaryLabel>

          <HorizontalDivider width={6} />

          <PrimaryLabel>{student.subjects[2].name.toUpperCase()}</PrimaryLabel>
        </Row>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Card
