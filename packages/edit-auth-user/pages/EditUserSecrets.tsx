import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSecrets, {
  ContextUserSecrets,
} from 'packages/edit-student-info/pages/Secrets'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { useEditAuthUserContext, EditAuthUserContextSecrets } from '../context'
import EditAuthUserSecretsSchema from '../EditAuthUserSecretsSchema'

const EditAuthUserSecrets: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const context = useEditAuthUserContext()

  const handleSubmit = async (data: ContextUserSecrets) => {
    try {
      formRef.current?.setErrors({})

      const validatedData = await validateSchema(
        EditAuthUserSecretsSchema,
        data
      )

      context.setSecrets(getFormattedData(validatedData))
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alertModal(error)
    }
  }

  const getInitialData = (): ContextUserSecrets => {
    return {
      email: context.secrets.email || '',
      password: context.secrets.password || '',
      confirm_password: context.secrets.confirm_password || '',
    }
  }

  const getFormattedData = (
    data: ContextUserSecrets
  ): EditAuthUserContextSecrets => {
    return {
      confirm_password: data.confirm_password
        ? data.confirm_password
        : undefined,
      password: data.password ? data.password : undefined,
      email: data.email || context.initialUser.email,
    }
  }

  return (
    <EditStudentSecrets
      title="Editar Perfil"
      formRef={formRef}
      handleSubmit={handleSubmit}
      initialData={getInitialData()}
      fixedEmail
    />
  )
}

export default EditAuthUserSecrets
