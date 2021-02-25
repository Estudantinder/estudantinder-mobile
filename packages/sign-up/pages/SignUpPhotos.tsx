import { useNavigation } from '@react-navigation/native'
import React from 'react'

import EditStudentPhotos from 'packages/edit-student-info/pages/Photos'
import { StudentPhotos } from 'packages/entities/Student'
import { SIGNUP_ROUTES } from 'packages/router/constants'

import { useSignUpContext } from '../context'

const SignUpPhotos: React.FC = () => {
  const context = useSignUpContext()

  const router = useNavigation()

  const onSubmitSuccess = (data: StudentPhotos) => {
    context.setPhotos(data)

    router.navigate(SIGNUP_ROUTES.PROFILE)
  }

  return (
    <EditStudentPhotos
      onSubmitSuccess={onSubmitSuccess}
      initialData={context.photos}
    />
  )
}

export default SignUpPhotos
