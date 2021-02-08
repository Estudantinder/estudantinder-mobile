import { ValidationError } from 'yup'

export default class UnformValidationError extends Error {
  public validationErrors

  constructor(error: ValidationError) {
    super('VALIDATION FAILED')

    const errors: Record<string, string> = {}

    error.inner.forEach((error) => {
      errors[error.path] = error.message
    })

    this.validationErrors = errors
  }
}
