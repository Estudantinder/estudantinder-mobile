import * as Yup from 'yup'
import { ValidateOptions } from 'yup/lib/types'

import UnformValidationError from './UnformValidationError'

export const DEFAULT_VALIDATION_OPTIONS: ValidateOptions = {
  abortEarly: false,
}

export default async function validateSchema<DataType>(
  schema: Yup.AnyObjectSchema,
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
      throw new UnformValidationError(error)
    }

    throw error
  }
}
