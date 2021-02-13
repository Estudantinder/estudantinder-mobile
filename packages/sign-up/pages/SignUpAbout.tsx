import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { SIGNUP_ROUTES } from 'packages/router/constants'
import EditStudentAbout from 'packages/student-info/edit-target-info/pages/About'

import { useSignUpContext } from '../context'

const SignUpAbout: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

  const navigateToSchool = () => {
    router.navigate(SIGNUP_ROUTES.SCHOOL)
  }

  return (
    <EditStudentAbout
      initialData={context.about}
      setData={context.setAbout}
      onSubmitSuccess={navigateToSchool}
    />
  )
}

export default SignUpAbout
