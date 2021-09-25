import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentDetailsSubmit from 'packages/edit-student-info/controllers/DetailsSubmit'
import EditStudentDetails from 'packages/edit-student-info/pages/Details'
import { StudentDetails } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { SignUpNavigationPagesParamsProps } from 'packages/router/stacks/sign-up'

import { useSignUpContext } from '../context'

type PageProps = NativeStackScreenProps<
  SignUpNavigationPagesParamsProps,
  typeof SIGNUP_ROUTES.DETAILS
>

type Navigation = PageProps['navigation']

const SignUpDetails: React.FC = () => {
  const router = useNavigation<Navigation>()

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
