import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useMemo } from 'react'
import { Animated, RegisteredStyle, ViewStyle } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import SubjectsRow from 'packages/components/SubjectsRow'
import Student from 'packages/entities/Student'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'
import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'
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
  style?:
    | false
    | RegisteredStyle<ViewStyle>
    | Animated.Value
    | Animated.AnimatedInterpolation
    | Animated.WithAnimatedObject<ViewStyle>
    | null
    | undefined
}

type PageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  typeof AUTHENTICATED_ROUTES.MAIN
>

type Navigation = PageProps['navigation']

const StudentCard: React.FC<StudentCardProps> = ({ student, style }) => {
  const studentAdapter = useMemo(
    () => new StudentDataAdapter(student),
    [student]
  )

  const router = useNavigation<Navigation>()

  const { theme } = useToggleThemeContext()

  const handleNavigateToTargetProfile = () => {
    router.navigate(AUTHENTICATED_ROUTES.TARGET_PROFILE, {
      student: { ...student, birth_date: student.birth_date.getTime() },
    })
  }

  return (
    <StudentCardContainer style={style}>
      <StudentCardImage
        resizeMode="cover"
        source={{
          uri: student.photos[0],
        }}
      />

      <StudentCardFooter>
        <StudentCardProfileButtonContainer>
          <StudentCardProfileButton onPress={handleNavigateToTargetProfile}>
            <MaterialCommunityIcons
              name="account-box"
              size={28}
              color={theme.pages.home.card.foreground}
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

        <SubjectsRow subjects={student.subjects} />
      </StudentCardFooter>
    </StudentCardContainer>
  )
}

export default StudentCard
