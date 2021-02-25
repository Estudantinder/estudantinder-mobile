import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSchoolSubmit from 'packages/edit-target-info/controllers/SchoolSubmit'
import EditStudentSchool from 'packages/edit-target-info/pages/School'
import { StudentSchool } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'

import { useSignUpContext } from '../context'

const SignUpSchool: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

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
