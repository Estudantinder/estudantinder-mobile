import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentAboutSubmit from 'packages/edit-student-info/controllers/AboutSubmit'
import EditStudentAbout from 'packages/edit-student-info/pages/About'
import { StudentAbout } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { SignUpNavigationPagesParamsProps } from 'packages/router/stacks/sign-up'

import { useSignUpContext } from '../context'

type PageProps = NativeStackScreenProps<
  SignUpNavigationPagesParamsProps,
  typeof SIGNUP_ROUTES.ABOUT
>

type Navigation = PageProps['navigation']

const SignUpAbout: React.FC = () => {
  const context = useSignUpContext()

  const formRef = useRef<FormHandles>(null)

  const router = useNavigation<Navigation>()

  const onSubmitSuccess = (data: StudentAbout) => {
    context.setAbout(data)

    router.navigate(SIGNUP_ROUTES.SCHOOL)
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

export default SignUpAbout
