import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSchoolSubmit from 'packages/edit-student-info/controllers/SchoolSubmit'
import EditStudentSchool from 'packages/edit-student-info/pages/School'
import { StudentSchool } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { SignUpNavigationPagesParamsProps } from 'packages/router/stacks/sign-up'

import { useSignUpContext } from '../context'

type PageProps = NativeStackScreenProps<
  SignUpNavigationPagesParamsProps,
  typeof SIGNUP_ROUTES.SCHOOL
>

type Navigation = PageProps['navigation']

const SignUpSchool: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation<Navigation>()

  const onSubmitSuccess = (data: StudentSchool) => {
    context.setSchool(data)

    router.navigate(SIGNUP_ROUTES.CONTACTS)
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

export default SignUpSchool
