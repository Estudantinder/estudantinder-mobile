import Student from 'main/entities/Student'

import { GENDERS_ENUM } from 'shared/constants'

import { GetStudentsApiData } from './interfaces'

export default function getStudentSerializer(data: GetStudentsApiData) {
  let gender

  if (!Number(data.gender)) gender = data.gender
  else if (Number(data.gender) === GENDERS_ENUM.FEMALE) gender = 'Feminino'
  else if (Number(data.gender) === GENDERS_ENUM.MALE) gender = 'Masculino'

  const serializedStudent = new Student({
    bio: data.bio,
    birth_date: data.birth_date,
    classroom: data.classroom,
    course_id: String(data.course.id),
    name: data.name,
    school_year: data.school_year,
    shift: data.shift,
    subjects: data.subjects,
    course: {
      id: String(data.course.id),
      name: data.course.name,
    },
    school: data.school,
    gender,
  })

  return serializedStudent
}
