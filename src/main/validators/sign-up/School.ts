import * as Yup from 'yup'

export default function ValidateSignUpSchool() {
  return Yup.object().shape({
    course_id: Yup.number().required(),
    school_year: Yup.number().oneOf([1, 2, 3]).required(),
    shift: Yup.number().oneOf([0, 1]).required(),
    classroom: Yup.string().max(1).required(),
  })
}
