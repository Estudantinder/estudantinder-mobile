import React from 'react'

import Match from 'main/entities/Match'

import Scroll from 'views/components/atoms/Scroll'
import MatchCard from 'views/components/organisms/MatchCard'
import { Container, Title } from 'views/styles/globalStyles'

import { GENDERS_ENUM, SHIFTS } from 'shared/constants'

const matches = [
  new Match({
    bio: 'exaltasamba 2008 ao vivo',
    birth_date: new Date(2004, 12, 3),
    classroom: 'F',
    contacts: {
      instagram: '2313',
    },
    course: { id: '2', name: 'Informática' },
    id: '1',
    name: 'Exaltasamba',
    photos: ['https://vitrinebh.files.wordpress.com/2011/11/exaltasamba.jpg'],
    school: {
      address: 'ITB BELVAL',
      courses: [{ id: '2', name: 'Informática' }],
      id: '12',
      name: 'Brasilio flores',
    },
    school_year: 3,
    shift: SHIFTS.AFTERNOON,
    subjects: [
      { id: '2', name: 'artes' },
      { id: '3', name: 'geografia' },
      { id: '4', name: 'matematica' },
    ],
    gender: GENDERS_ENUM.MALE,
  }),
  new Match({
    bio: 'exaltasamba 2008 ao vivo',
    birth_date: new Date(2004, 12, 3),
    classroom: 'F',
    contacts: {
      facebook: '21',
      whatsapp: '5511939325571',
    },
    course: { id: '2', name: 'Informática' },
    id: '2',
    name: 'Exaltasamba 2',
    photos: ['https://vitrinebh.files.wordpress.com/2011/11/exaltasamba.jpg'],
    school: {
      address: 'ITB BELVAL',
      courses: [{ id: '2', name: 'Informática' }],
      id: '12',
      name: 'Brasilio flores',
    },
    school_year: 3,
    shift: SHIFTS.AFTERNOON,
    subjects: [
      { id: '2', name: 'artes' },
      { id: '3', name: 'geografia' },
      { id: '4', name: 'matematica' },
    ],
    gender: GENDERS_ENUM.MALE,
  }),
  new Match({
    bio: 'exaltasamba 2008 ao vivo',
    birth_date: new Date(2004, 12, 3),
    classroom: 'F',
    contacts: {
      facebook: '21',
      instagram: '2313',
      whatsapp: '5511939325571',
    },
    course: { id: '2', name: 'Informática' },
    id: '3',
    name: 'Exaltasamba 3',
    photos: ['https://vitrinebh.files.wordpress.com/2011/11/exaltasamba.jpg'],
    school: {
      address: 'ITB BELVAL',
      courses: [{ id: '2', name: 'Informática' }],
      id: '12',
      name: 'Brasilio flores',
    },
    school_year: 3,
    shift: SHIFTS.AFTERNOON,
    subjects: [
      { id: '2', name: 'artes' },
      { id: '3', name: 'geografia' },
      { id: '4', name: 'matematica' },
    ],
    gender: GENDERS_ENUM.MALE,
  }),
  new Match({
    bio: 'exaltasamba 2008 ao vivo',
    birth_date: new Date(2004, 12, 3),
    classroom: 'F',
    contacts: {
      facebook: '21',
      instagram: '2313',
      twitter: '1231',
      whatsapp: '5511939325571',
    },
    course: { id: '2', name: 'Informática' },
    id: '4',
    name: 'Exaltasamba 4',
    photos: ['https://vitrinebh.files.wordpress.com/2011/11/exaltasamba.jpg'],
    school: {
      address: 'ITB BELVAL',
      courses: [{ id: '2', name: 'Informática' }],
      id: '12',
      name: 'Brasilio flores',
    },
    school_year: 3,
    shift: SHIFTS.AFTERNOON,
    subjects: [
      { id: '2', name: 'artes' },
      { id: '3', name: 'geografia' },
      { id: '4', name: 'matematica' },
    ],
    gender: GENDERS_ENUM.MALE,
  }),
]

const Matches: React.FC = () => {
  return (
    <Container>
      <Title>Matches</Title>

      <Scroll>
        {matches.map((value) => (
          <MatchCard key={value.id} match={value} />
        ))}
      </Scroll>
    </Container>
  )
}

export default Matches
