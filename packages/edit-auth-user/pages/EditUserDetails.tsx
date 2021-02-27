import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentDetailsSubmit from 'packages/edit-student-info/controllers/DetailsSubmit'
import EditStudentDetails from 'packages/edit-student-info/pages/Details'
import { StudentDetails } from 'packages/entities/Student'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'

import { useEditAuthUserContext } from '../context'

const EditAuthUserDetails: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const context = useEditAuthUserContext()

  const onSubmitSuccess = (data: StudentDetails) => {
    context.setDetails(data)

    router.navigate(EDIT_AUTH_USER_ROUTES.PHOTOS)
  }

  const detailsSubmit = new EditStudentDetailsSubmit({
    formRef,
    onSubmitSuccess,
  })

  return (
    <EditStudentDetails
      formRef={formRef}
      handleSubmit={(data) => detailsSubmit.handle(data)}
      initialData={context.details}
    />
  )
}
export default EditAuthUserDetails
