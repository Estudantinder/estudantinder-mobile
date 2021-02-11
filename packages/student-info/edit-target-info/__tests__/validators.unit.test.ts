import faker from 'faker'

import { StudentAbout } from 'packages/entities/Student'

import {
  StudentAboutSchema,
  STUDENT_ABOUT_SCHEMA_MAX_DATE,
  STUDENT_ABOUT_SCHEMA_MIN_DATE,
} from '../validators'
import randomGender from './randomGender'

describe('student-info/validators:', () => {
  describe('StudentAbout', () => {
    const data: StudentAbout = {
      birth_date: faker.date.between(
        STUDENT_ABOUT_SCHEMA_MIN_DATE,
        STUDENT_ABOUT_SCHEMA_MAX_DATE
      ),
      name: faker.name.findName(),
      gender: randomGender(),
    }

    test('should pass if all values are valid', () => {
      expect(StudentAboutSchema.isValidSync(data)).toBe(true)
    })

    describe('name: ', () => {
      test('should be required', () => {
        expect(
          StudentAboutSchema.isValidSync({ ...data, name: undefined })
        ).toBe(false)
      })
    })

    describe('birth_date:', () => {
      test('should be required', () => {
        expect(
          StudentAboutSchema.isValidSync({ ...data, birth_date: undefined })
        ).toBe(false)
      })

      test('should be min of 12 full years', () => {
        expect(
          StudentAboutSchema.isValidSync({
            ...data,
            birth_date: faker.date.past(11),
          })
        ).toBe(false)
      })

      test('should be max of 21 full years', () => {
        const birth_date = STUDENT_ABOUT_SCHEMA_MIN_DATE.setFullYear(
          STUDENT_ABOUT_SCHEMA_MIN_DATE.getFullYear() - 1
        )

        expect(
          StudentAboutSchema.isValidSync({
            ...data,
            birth_date,
          })
        ).toBe(false)
      })
    })

    describe('gender: ', () => {
      test('should be optional', () => {
        expect(
          StudentAboutSchema.isValidSync({ ...data, gender: undefined })
        ).toBe(true)
      })
    })
  })
})
