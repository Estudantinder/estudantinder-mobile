import faker from 'faker'

import Contacts from 'packages/entities/Contacts'

export default new Contacts({
  facebook: faker.internet.userName(),
  instagram: faker.internet.userName(),
  twitter: faker.internet.userName(),
  whatsapp: '(11) 90000-0000',
})
