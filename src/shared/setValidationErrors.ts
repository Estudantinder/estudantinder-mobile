import { RefObject } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

export default function setValidationErrors(
  err: ValidationError,
  ref: RefObject<FormHandles>
) {
  const validationErrors: Record<string, string> = {}

  err.inner.forEach((error) => {
    validationErrors[error.path] = error.message
  })

  return ref?.current?.setErrors(validationErrors)
}
