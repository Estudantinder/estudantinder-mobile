import faker from 'faker'
import { mocked } from 'ts-jest/utils'

import useSubjectsData from 'packages/api/swr-hooks/useSubjectsData'
import Subject from 'packages/entities/Subject'

jest.mock('packages/api/swr-hooks/useSubjectsData')

export const mockedSubjectsData = mocked(useSubjectsData, true)

const getMockedSubjects = (length = 8) => {
  const subjects: Subject[] = []

  for (let index = 0; index < length; index++) {
    const newSubject = new Subject({
      id: String(index + 1),
      name: faker.name.jobArea(),
    })

    subjects.push(newSubject)
  }

  return subjects
}

mockedSubjectsData.mockReturnValue({
  error: undefined,
  loading: false,
  subjects: getMockedSubjects(),
})
