import { ValidationError } from 'yup'

export default class FormattedValidationError extends Error {
  public validationErrors: Record<string, string>

  constructor(error: ValidationError) {
    super('Validation not pass')

    const errors: Record<string, string> = {}

    error.inner.forEach((error) => {
      errors[error.path] = error.message
    })

    this.validationErrors = errors
  }
}
