import faker from 'faker'
import { mocked } from 'ts-jest/utils'

import api from 'packages/api'

import EmailExistsUseCase from '../use-cases/email-exists'
import EmailExistsError from '../use-cases/email-exists/EmailExistsError'

jest.mock('packages/api')

const mockedApi = mocked(api, true)

describe('sign-up/email-exists', () => {
  const email = faker.internet.email()

  const EmailExistsUseCaseMock = async (data: string) => {
    if (data === email) {
      mockedApi.post.mockRejectedValue({
        response: { data: { message: '[mock]: EMAIL ALREADY EXISTS' } },
      })
    } else {
      mockedApi.post.mockResolvedValue({ status: 204, data: undefined })
    }

    await EmailExistsUseCase(data)
  }

  describe('when checking for email', () => {
    test('should throw EmailExistsError if email exists', async () => {
      expect.assertions(1)

      try {
        await EmailExistsUseCaseMock(email)
      } catch (error) {
        expect(error).toBeInstanceOf(EmailExistsError)
      }
    })

    test('should not throw if email not exists', async () => {
      expect.assertions(0)

      try {
        await EmailExistsUseCaseMock(faker.internet.email())
      } catch (error) {
        expect(error).toBeInstanceOf(EmailExistsError)
      }
    })
  })
})
