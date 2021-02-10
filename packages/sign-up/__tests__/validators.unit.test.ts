import faker from 'faker'

import { ContextUserSecrets } from '../context'
import { SignUpSecretsValidationSchema } from '../validators'

describe('sign-up/validators', () => {
  describe('secrets: ', () => {
    const randomPassword = faker.random.alphaNumeric(8)

    const data: ContextUserSecrets = {
      email: faker.internet.email(),
      confirm_password: randomPassword,
      password: randomPassword,
    }

    test('should pass if all value are valid', () => {
      expect(SignUpSecretsValidationSchema.isValidSync(data)).toBe(true)
    })

    describe('email: ', () => {
      test('should be required', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            email: undefined,
          })
        ).toBe(false)

        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            email: data.email,
          })
        ).toBe(true)
      })

      test('should be a valid email', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            email: 'invalid',
          })
        ).toBe(false)

        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            email: data.email,
          })
        ).toBe(true)
      })
    })
    describe('password: ', () => {
      test('should be required', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            password: undefined,
          })
        ).toBe(false)
      })

      test('should have at lest 8 chars', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            password: faker.random.alphaNumeric(7),
          })
        ).toBe(false)
      })
      test('should have at lest 1 number', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            password: faker.random.alpha({ count: 8 }),
          })
        ).toBe(false)
      })
    })
    describe('confirm_password: ', () => {
      test('should be required', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            confirm_password: undefined,
          })
        ).toBe(false)
      })
      test('should match password', () => {
        expect(
          SignUpSecretsValidationSchema.isValidSync({
            ...data,
            confirm_password: data.password + 'abc',
          })
        ).toBe(false)
      })
    })
  })
})
