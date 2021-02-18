import faker from 'faker'

import StudentMock from 'packages/__mocks__/Student.mock'
import { StudentSchool } from 'packages/entities/Student'
import StudentSchoolSchema from 'packages/student-info/edit-target-info/validators/StudentSchoolSchema'

describe('student-info/edit-target-info/StudentSchoolSchema', () => {
  const data: StudentSchool = {
    classroom: StudentMock.classroom,
    course: StudentMock.course,
    school: StudentMock.school,
    school_year: StudentMock.school_year,
    shift: StudentMock.shift,
  }

  test('should pass if all value are valid', () => {
    expect(StudentSchoolSchema.isValidSync(data)).toBe(true)
  })

  describe('classroom:', () => {
    test('should be required', () => {
      expect(
        StudentSchoolSchema.isValidSync({
          ...data,
          classroom: undefined,
        })
      ).toBe(false)
    })

    test('should be max 1 length', () => {
      expect(
        StudentSchoolSchema.isValidSync({ ...data, classroom: 'AB' })
      ).toBe(false)
    })
  })

  describe('shift:', () => {
    test('should be required', () => {
      expect(
        StudentSchoolSchema.isValidSync({ ...data, shift: undefined })
      ).toBe(false)
    })

    test('should be one of SHIFTS.MORNING or SHIFTS.AFTERNOON', () => {
      expect(
        StudentSchoolSchema.isValidSync({
          ...data,
          shift: faker.random.number({ min: 3 }),
        })
      ).toBe(false)
    })
  })

  describe('school year:', () => {
    test('should be one of 1, 2, 3', () => {
      expect(
        StudentSchoolSchema.isValidSync({
          data,
          school_year: faker.random.number({ min: 4 }),
        })
      ).toBe(false)

      expect(
        StudentSchoolSchema.isValidSync({
          data,
          school_year: faker.random.number({ min: 0 }),
        })
      ).toBe(false)
    })
  })

  describe('school:', () => {
    test('should be required', () => {
      expect(
        StudentSchoolSchema.isValidSync({ ...data, school: undefined })
      ).toBe(false)
    })

    test('should be a School', () => {
      expect(
        StudentSchoolSchema.isValidSync({
          ...data,
          school: { isValid: false },
        })
      ).toBe(false)
    })
  })

  describe('course:', () => {
    test('should be required', () => {
      expect(
        StudentSchoolSchema.isValidSync({ ...data, course: undefined })
      ).toBe(false)
    })

    test('should be a School', () => {
      expect(
        StudentSchoolSchema.isValidSync({
          ...data,
          course: { isValid: false },
        })
      ).toBe(false)
    })
  })
})
