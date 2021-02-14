import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { SIGNUP_ROUTES } from 'packages/router/constants'
import EditStudentContacts from 'packages/student-info/edit-target-info/pages/Contacts'

import { useSignUpContext } from '../context'

const SignUpContacts: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

  const navigateToDetails = () => {
    router.navigate(SIGNUP_ROUTES.DETAILS)
  }

  return (
    <EditStudentContacts
      initialData={context.contacts}
      setData={context.setContacts}
      onSubmitSuccess={navigateToDetails}
    />
  )
}

export default SignUpContacts
