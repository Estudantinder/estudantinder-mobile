import * as Yup from 'yup'

import { UserSchool } from 'main/entities/User'

import { DEFAULT_VALIDATION_OPTIONS, SHIFTS } from 'shared/constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type SchoolKeys = Record<keyof UserSchool, unknown>

export default async function validateUserSchoolData(data: UserSchool) {
  try {
    const schema = Yup.object().shape<SchoolKeys>({
      course_id: Yup.number().required(),
      school_year: Yup.number().oneOf([1, 2, 3]).required(),
      shift: Yup.number().oneOf([SHIFTS.MORNING, SHIFTS.AFTERNOON]).required(),
      classroom: Yup.string().max(1).required(),
    })

    await schema.validate(data, DEFAULT_VALIDATION_OPTIONS)
  } catch (error) {
    if (error instanceof Yup.ValidationError) {
      throw new FormattedValidationError(error)
    }

    throw error
  }
}
