import faker from 'faker'

import StudentMock from 'packages/__mocks__/Student.mock'
import { StudentAbout } from 'packages/entities/Student'

import StudentAboutSchema, {
  STUDENT_ABOUT_SCHEMA_MIN_DATE,
} from '../validators/StudentAboutSchema'

describe('student-info/edit-target-info/StudentAboutSchema', () => {
  const data: StudentAbout = {
    birth_date: StudentMock.birth_date,
    name: StudentMock.name,
    gender: StudentMock.gender,
  }

  test('should pass if all values are valid', () => {
    expect(StudentAboutSchema.isValidSync(data)).toBe(true)
  })

  describe('name: ', () => {
    test('should be required', () => {
      expect(StudentAboutSchema.isValidSync({ ...data, name: undefined })).toBe(
        false
      )
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
