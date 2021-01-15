import * as Yup from 'yup'

import { UserSchool } from 'main/entities/User'

import { SHIFTS } from 'shared/Constants'

type SchoolKeys = Record<keyof UserSchool, unknown>

export default function ValidateSignUpSchool() {
  return Yup.object().shape<SchoolKeys>({
    course_id: Yup.number().required(),
    school_year: Yup.number().oneOf([1, 2, 3]).required(),
    shift: Yup.number().oneOf([SHIFTS.MORNING, SHIFTS.AFTERNOON]).required(),
    classroom: Yup.string().max(1).required(),
  })
}
