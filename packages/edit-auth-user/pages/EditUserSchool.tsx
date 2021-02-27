import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSchoolSubmit from 'packages/edit-student-info/controllers/SchoolSubmit'
import EditStudentSchool from 'packages/edit-student-info/pages/School'
import { StudentSchool } from 'packages/entities/Student'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'

import { useEditAuthUserContext } from '../context'

const EditAuthUserSchool: React.FC = () => {
  const context = useEditAuthUserContext()

  const router = useNavigation()

  const onSubmitSuccess = (data: StudentSchool) => {
    context.setSchool(data)

    router.navigate(EDIT_AUTH_USER_ROUTES.CONTACTS)
  }

  const formRef = useRef<FormHandles>(null)

  const schoolSubmit = new EditStudentSchoolSubmit({ formRef, onSubmitSuccess })

  return (
    <EditStudentSchool
      initialData={context.school}
      formRef={formRef}
      handleSubmit={(data) => schoolSubmit.handle(data)}
    />
  )
}

export default EditAuthUserSchool
