import { Route, useRoute } from '@react-navigation/native'
import React from 'react'

import Student from 'main/entities/Student'

import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import StudentInfo from 'views/components/templates/StudentInfo'

export interface TargetProfileRouteProps {
  student: Student
}

const TargetProfile: React.FC = () => {
  const {
    params: { student },
  } = useRoute<Route<'TargetProfile', TargetProfileRouteProps>>()

  return (
    <FormPageTemplate title="Ver Perfil">
      <StudentInfo student={student} />
    </FormPageTemplate>
  )
}

export default TargetProfile
