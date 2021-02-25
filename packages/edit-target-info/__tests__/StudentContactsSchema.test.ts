import faker from 'faker'

import ContactsMock from 'packages/__mocks__/Contacts.mock'
import StudentContactsSchema from 'packages/edit-target-info/validators/StudentContactsSchema'

describe('student-info/edit-target-info/StudentContactsSchema', () => {
  test('should pass is all values are valid', async () => {
    expect(await StudentContactsSchema.isValid(ContactsMock)).toBeTruthy()
  })

  describe('whatsapp:', () => {
    test('should be optional', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          whatsapp: undefined,
        })
      ).toBe(true)
    })

    test('should be a valid brazilian phone number', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          whatsapp: faker.phone.phoneNumber(),
        })
      ).toBe(false)
    })
  })

  describe('twitter:', () => {
    test('should be optional', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          twitter: undefined,
        })
      ).toBe(true)
    })

    test('should be a valid twitter username', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          twitter: 'invalid username',
        })
      ).toBe(false)
    })
  })

  describe('facebook:', () => {
    test('should be optional', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          facebook: undefined,
        })
      ).toBe(true)
    })

    test('should be a valid facebook username', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          facebook: 'invalid username',
        })
      ).toBe(false)
    })
  })

  describe('instagram:', () => {
    test('should be optional', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          instagram: undefined,
        })
      ).toBe(true)
    })

    test('should be a valid instagram username', async () => {
      expect(
        await StudentContactsSchema.isValid({
          ...ContactsMock,
          instagram: 'invalid username',
        })
      ).toBe(false)
    })
  })
})
