import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import EditStudentSecrets, {
  ContextUserSecrets,
} from 'packages/edit-student-info/pages/Secrets'
import alertModal from 'packages/utils/alertModal'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import { useEditAuthUserContext } from '../context'
import EditAuthUserSecretsSchema from '../EditAuthUserSecretsSchema'

const EditAuthUserSecrets: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const router = useNavigation()

  const context = useEditAuthUserContext()

  const handleSubmit = async (data: ContextUserSecrets) => {
    try {
      formRef.current?.setErrors({})

      const validatedData = await validateSchema(
        EditAuthUserSecretsSchema,
        data
      )

      await context.updateUser(validatedData)

      router.goBack()
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
