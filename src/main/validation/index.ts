import * as Yup from 'yup'

import FormattedValidationError from 'shared/FormattedValidationError'

export const DEFAULT_VALIDATION_OPTIONS: Yup.ValidateOptions = {
  abortEarly: false,
}

export default async function validateSchema<DataType>(
  schema: Yup.ObjectSchema,
  data: DataType
): Promise<DataType> {
  try {
    const validatedData = await schema.validate(
      data,
      DEFAULT_VALIDATION_OPTIONS
    )

    return validatedData as never
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
