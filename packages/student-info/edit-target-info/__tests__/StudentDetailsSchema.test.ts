import faker from 'faker'

import StudentMock from 'packages/__mocks__/Student.mock'
import { StudentDetails } from 'packages/entities/Student'
import StudentDetailsSchema from 'packages/student-info/edit-target-info/validators/StudentDetailsSchema'

describe('student-info/edit-target-info/StudentDetailsSchema', () => {
  const data: StudentDetails = {
    bio: StudentMock.bio,
    subjects: StudentMock.subjects,
  }

  test('should pass if all values are valid', async () => {
    expect(await StudentDetailsSchema.isValid(data)).toBe(true)
  })

  describe('bio:', () => {
    test('should be required', async () => {
      expect(
        await StudentDetailsSchema.isValid({ ...data, bio: undefined })
      ).toBe(false)
    })

    test('should be the max length of 256', async () => {
      expect(
        await StudentDetailsSchema.isValid({
          ...data,
          bio: faker.lorem.paragraphs(6),
        })
      )
    })
  })

  describe('subjects:', () => {
    test('should be required', async () => {
      expect(
        await StudentDetailsSchema.isValid({ ...data, subjects: undefined })
      ).toBe(false)
    })

    test('should be an array with 3 items', async () => {
      expect(
        await StudentDetailsSchema.isValid({
          ...data,
          subjects: [data.subjects[0]],
        })
      ).toBe(false)

      expect(
        await StudentDetailsSchema.isValid({
          ...data,
          subjects: [data.subjects[0], data.subjects[1]],
        })
      ).toBe(false)

      expect(
        await StudentDetailsSchema.isValid({
          ...data,
          subjects: [
            data.subjects[0],
            data.subjects[1],
            data.subjects[2],
            data.subjects[0],
          ],
        })
      ).toBe(false)
    })
  })
})
