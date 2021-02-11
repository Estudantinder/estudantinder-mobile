import faker from 'faker'

import { GENDERS, IGender } from 'packages/entities/Gender'

export default (): IGender | undefined => {
  const randomNumber = Math.abs(faker.random.number(2))

  if (randomNumber === GENDERS.FEMALE) return GENDERS.FEMALE
  if (randomNumber === GENDERS.MALE) return GENDERS.MALE

  const randomGender = faker.random.alpha()

  if (randomGender.length <= 4) return undefined

  return randomGender
}
