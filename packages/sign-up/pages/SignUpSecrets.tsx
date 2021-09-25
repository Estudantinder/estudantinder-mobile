import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSecrets, {
  ContextUserSecrets,
} from 'packages/edit-student-info/pages/Secrets'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { SignUpNavigationPagesParamsProps } from 'packages/router/stacks/sign-up'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { useSignUpContext } from '../context'
import SignUpSecretsValidationSchema from '../SignUpSecretsValidationSchema'
import EmailExistsUseCase from '../use-cases/email-exists'
import EmailExistsError from '../use-cases/email-exists/EmailExistsError'

type PageProps = NativeStackScreenProps<
  SignUpNavigationPagesParamsProps,
  typeof SIGNUP_ROUTES.SECRETS
>

type Navigation = PageProps['navigation']

const SignUpSecrets: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const context = useSignUpContext()

  const router = useNavigation<Navigation>()

  const handleSubmit = async (data: ContextUserSecrets) => {
    try {
      formRef.current?.setErrors({})

      const validatedData = await validateSchema(
        SignUpSecretsValidationSchema,
        data
      )

      await EmailExistsUseCase(validatedData.email)

      context.setSecrets(validatedData)

      router.navigate(SIGNUP_ROUTES.ABOUT)
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      if (error instanceof EmailExistsError) {
        return formRef.current?.setFieldError('email', error.message)
      }

      return alertModal(error)
    }
  }

  return (
    <EditStudentSecrets
      title="Cadastre-se"
      formRef={formRef}
      handleSubmit={handleSubmit}
    />
  )
}

export default SignUpSecrets
