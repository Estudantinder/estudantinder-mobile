import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentContactsSubmit from 'packages/edit-student-info/controllers/ContactsSubmit'
import EditStudentContacts from 'packages/edit-student-info/pages/Contacts'
import Contacts from 'packages/entities/Contacts'
import { SIGNUP_ROUTES } from 'packages/router/constants'

import { useSignUpContext } from '../context'

const SignUpContacts: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

  const onSubmitSuccess = (data: Contacts) => {
    context.setContacts(data)

    router.navigate(SIGNUP_ROUTES.DETAILS)
  }

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = new EditStudentContactsSubmit({
    formRef,
    onSubmitSuccess,
  })

  return (
    <EditStudentContacts
      initialData={context.contacts}
      formRef={formRef}
      handleSubmit={(data) => handleSubmit.handle(data)}
    />
  )
}

export default SignUpContacts
