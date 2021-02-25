import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentDetailsSubmit from 'packages/edit-target-info/controllers/DetailsSubmit'
import EditStudentDetails from 'packages/edit-target-info/pages/Details'
import { StudentDetails } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'

import { useSignUpContext } from '../context'

const SignUpDetails: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const context = useSignUpContext()

  const onSubmitSuccess = (data: StudentDetails) => {
    context.setDetails(data)

    router.navigate(SIGNUP_ROUTES.PHOTOS)
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
export default SignUpDetails
