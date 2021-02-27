import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { formatToGenericPhone } from 'brazilian-values'

import EditStudentContactsSubmit from 'packages/edit-student-info/controllers/ContactsSubmit'
import EditStudentContacts from 'packages/edit-student-info/pages/Contacts'
import Contacts from 'packages/entities/Contacts'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'

import { useEditAuthUserContext } from '../context'

const EditAuthUserContacts: React.FC = () => {
  const context = useEditAuthUserContext()

  const router = useNavigation()

  const onSubmitSuccess = (data: Contacts) => {
    context.setContacts(data)

    router.navigate(EDIT_AUTH_USER_ROUTES.DETAILS)
  }

  const formRef = useRef<FormHandles>(null)

  const handleSubmit = new EditStudentContactsSubmit({
    formRef,
    onSubmitSuccess,
  })

  return (
    <EditStudentContacts
      initialData={{
        ...context.contacts,
        whatsapp: formatToGenericPhone(String(context.contacts.whatsapp)),
      }}
      formRef={formRef}
      handleSubmit={(data) => handleSubmit.handle(data)}
    />
  )
}

export default EditAuthUserContacts
