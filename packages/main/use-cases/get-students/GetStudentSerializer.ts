import Course from 'packages/entities/Course'
import { GENDERS, IGender } from 'packages/entities/Gender'
import School from 'packages/entities/School'
import Student from 'packages/entities/Student'
import Subject from 'packages/entities/Subject'

export interface GetStudentsApiData {
  bio: string
  birth_date: Array<number>
  classroom: string
  course: Course
  gender: IGender
  name: string
  school: School
  school_year: number
  shift: number
  subjects: Subject[]
  photos: Array<string>
  id: number
}

export default function GetStudentSerializer(
  data: GetStudentsApiData
): Student {
  const getGender = () => {
    if (!Number(data.gender)) return data.gender
    else if (Number(data.gender) === GENDERS.FEMALE) return GENDERS.FEMALE
    else if (Number(data.gender) === GENDERS.MALE) return GENDERS.MALE

    return undefined
  }

  const serializedStudent = new Student({
    bio: data.bio,
    birth_date: new Date(
      data.birth_date[0],
      data.birth_date[1],
      data.birth_date[2]
    ),
    classroom: data.classroom,
    name: data.name,
    school_year: data.school_year,
    shift: data.shift,
    subjects: data.subjects,
    course: {
      id: String(data.course.id),
      name: data.course.name,
    },
    school: data.school,
    gender: getGender(),
    photos: data.photos,
    id: String(data.id),
  })

  return serializedStudent
}
