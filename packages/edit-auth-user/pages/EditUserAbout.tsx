import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentAboutSubmit from 'packages/edit-student-info/controllers/AboutSubmit'
import EditStudentAbout from 'packages/edit-student-info/pages/About'
import { StudentAbout } from 'packages/entities/Student'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'

import { useEditAuthUserContext } from '../context'

const EditAuthUserAbout: React.FC = () => {
  const context = useEditAuthUserContext()

  const formRef = useRef<FormHandles>(null)

  const router = useNavigation()

  const onSubmitSuccess = (data: StudentAbout) => {
    context.setAbout(data)

    router.navigate(EDIT_AUTH_USER_ROUTES.SCHOOL)
  }

  const editStudentAboutSubmit = new EditStudentAboutSubmit({
    formRef,
    onSubmitSuccess,
  })

  return (
    <EditStudentAbout
      initialData={context.about}
      handleSubmit={(data) => editStudentAboutSubmit.handle(data)}
      formRef={formRef}
    />
  )
}

export default EditAuthUserAbout
