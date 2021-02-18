import faker from 'faker'

import { GENDERS, IGender } from 'packages/entities/Gender'
import School from 'packages/entities/School'
import { SHIFTS } from 'packages/entities/Shift'
import Student from 'packages/entities/Student'
import {
  STUDENT_ABOUT_SCHEMA_MAX_DATE,
  STUDENT_ABOUT_SCHEMA_MIN_DATE,
} from 'packages/student-info/edit-target-info/validators/StudentAboutSchema'

const getRandomGender = (): IGender | undefined => {
  const randomNumber = Math.abs(faker.random.number(2))

  if (randomNumber === GENDERS.FEMALE) return GENDERS.FEMALE
  if (randomNumber === GENDERS.MALE) return GENDERS.MALE

  const randomGender = faker.random.alpha()

  if (randomGender.length <= 4) return undefined

  return randomGender
}

const school = new School({
  id: '1',
  name: faker.name.findName(),
  address: faker.address.city(),
  courses: [
    {
      id: '2',
      name: faker.name.jobArea(),
    },
    {
      id: '3',
      name: faker.name.jobArea(),
    },
    {
      id: '4',
      name: faker.name.jobArea(),
    },
    {
      id: '5',
      name: faker.name.jobArea(),
    },
    {
      id: '6',
      name: faker.name.jobArea(),
    },
  ],
})

export default new Student({
  gender: getRandomGender(),
  school,
  course: school.courses[faker.random.number(4)],
  classroom: faker.random.alpha({ count: 1 }),
  shift: faker.random.boolean() ? SHIFTS.MORNING : SHIFTS.AFTERNOON,
  school_year: faker.random.number({ min: 1, max: 3 }),
  bio: faker.random.words(20),
  birth_date: faker.date.between(
    STUDENT_ABOUT_SCHEMA_MIN_DATE,
    STUDENT_ABOUT_SCHEMA_MAX_DATE
  ),
  name: faker.name.findName(),
  photos: [faker.image.animals(), faker.image.city(), faker.image.nature()],
  subjects: [
    { name: faker.name.jobArea(), id: '12' },
    { name: faker.name.jobArea(), id: '13' },
    { name: faker.name.jobArea(), id: '14' },
  ],
  id: '2',
})
