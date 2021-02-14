import faker from 'faker'

import { ContextUserSecrets } from '../context'
import SignUpSecretsValidationSchema from '../SignUpSecretsValidationSchema'

describe('sign-up/SignUpSecretsValidationSchema', () => {
  const randomPassword = faker.random.alphaNumeric(8)

  const data: ContextUserSecrets = {
    email: faker.internet.email(),
    confirm_password: randomPassword,
    password: randomPassword,
  }

  test('should pass if all value are valid', async () => {
    expect(await SignUpSecretsValidationSchema.isValid(data)).toBe(true)
  })

  describe('email:', () => {
    test('should be required', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          email: undefined,
        })
      ).toBe(false)
    })

    test('should be a valid email', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          email: 'invalid',
        })
      ).toBe(false)
    })
  })
  describe('password:', () => {
    test('should be required', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          password: undefined,
        })
      ).toBe(false)
    })

    test('should have at lest 8 chars ', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          password: faker.random.alphaNumeric(7),
        })
      ).toBe(false)
    })
    test('should have at lest 1 number ', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          password: faker.random.alpha({ count: 8 }),
        })
      ).toBe(false)
    })
  })
  describe('confirm_password:', () => {
    test('should be required', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          confirm_password: undefined,
        })
      ).toBe(false)
    })
    test('should match password', async () => {
      expect(
        await SignUpSecretsValidationSchema.isValid({
          ...data,
          confirm_password: data.password + 'abc',
        })
      ).toBe(false)
    })
  })
})
