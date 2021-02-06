import { Route, useRoute } from '@react-navigation/native'
import React from 'react'

import Student from 'main/entities/Student'

import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import StudentInfo from 'views/components/templates/StudentInfo'

export interface TargetProfileRouteProps {
  student: Modify<Student, { birth_date: number }>
}

const TargetProfile: React.FC = () => {
  const {
    params: { student },
  } = useRoute<Route<'TargetProfile', TargetProfileRouteProps>>()

  console.log(student.birth_date)

  return (
    <FormPageTemplate title="Ver Perfil">
      <StudentInfo
        student={{ ...student, birth_date: new Date(student.birth_date) }}
      />
    </FormPageTemplate>
  )
}

export default TargetProfile
