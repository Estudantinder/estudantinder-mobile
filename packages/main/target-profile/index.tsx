import { Route, useRoute } from '@react-navigation/native'
import React from 'react'

import { Feather } from '@expo/vector-icons'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import Student from 'packages/entities/Student'
import ShowStudent from 'packages/show-student-info'
import { useToggleThemeContext } from 'packages/styles/context'

import {
  TargetProfileMoreButton,
  TargetProfileSettingsContainer,
} from './styles'

export interface TargetProfileRouteProps {
  student: Modify<Student, { birth_date: number }>
}

const TargetProfile: React.FC = () => {
  const {
    params: { student },
  } = useRoute<Route<'TargetProfile', TargetProfileRouteProps>>()

  const { theme } = useToggleThemeContext()

  return (
    <StackPageTemplate title="Ver Perfil" withoutPadding>
      <TargetProfileSettingsContainer>
        <TargetProfileMoreButton
          onPress={() => {
            // TODO: Add a button to show more info
          }}
        >
          <Feather name="more-vertical" color={theme.icon.default} size={22} />
        </TargetProfileMoreButton>
      </TargetProfileSettingsContainer>

      <ShowStudent
        student={{ ...student, birth_date: new Date(student.birth_date) }}
      />
    </StackPageTemplate>
  )
}

export default TargetProfile
