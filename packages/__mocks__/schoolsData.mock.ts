import faker from 'faker'
import { mocked } from 'ts-jest/utils'

import useSchoolsData from 'packages/api/swr-hooks/useSchoolsData'
import School from 'packages/entities/School'

jest.mock('packages/api/swr-hooks/useSchoolsData')

export const mockedSchoolData = mocked(useSchoolsData, true)

const firstSchool = new School({
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

const secondSchool = new School({
  id: '7',
  name: faker.name.findName(),
  address: faker.address.city(),
  courses: [
    {
      id: '8',
      name: faker.name.jobArea(),
    },
    {
      id: '9',
      name: faker.name.jobArea(),
    },
    {
      id: '10',
      name: faker.name.jobArea(),
    },
    {
      id: '11',
      name: faker.name.jobArea(),
    },
  ],
})

mockedSchoolData.mockReturnValue({
  error: undefined,
  loading: false,
  schools: [firstSchool, secondSchool],
})
