import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { SIGNUP_ROUTES } from 'packages/router/constants'
import EditStudentSchool from 'packages/student-info/edit-target-info/pages/School'

import { useSignUpContext } from '../context'

const SignUpSchool: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

  const navigateToContacts = () => {
    router.navigate(SIGNUP_ROUTES.CONTACTS)
  }

  return (
    <EditStudentSchool
      initialData={context.school}
      setData={context.setSchool}
      onSubmitSuccess={navigateToContacts}
    />
  )
}

export default SignUpSchool
