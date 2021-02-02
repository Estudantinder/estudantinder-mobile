import React from 'react'

import { Feather } from '@expo/vector-icons'

import User from 'main/entities/User'

import Scroll from 'views/components/atoms/Scroll'
import StudentInfo from 'views/components/templates/StudentInfo'
import { Container, Title } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

import { GENDERS_ENUM, SHIFTS } from 'shared/constants'

import Styled from './styles'

const user = new User({
  bio:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed inventore, illum reiciendis minima doloremque error nobis consectetur quos placeat aliquid nulla et facilis repellat voluptates numquam earum saepe tempora. Voluptate.',
  birth_date: '2004-01-02',
  classroom: 'f',
  contacts: {
    whatsapp: '5511939325571',
  },
  course: {
    id: '2',
    name: 'INFORMÁTICA',
  },
  email: 'cauaspinheiro@gmail.com',
  name: 'Cauã Simões',
  password: '',
  photos: ['image.jpg'],
  school: {
    address: 'JARDIM BELVAL',
    courses: [
      {
        id: '8',
        name: 'Edificações',
      },
      {
        id: '9',
        name: 'Eletroeletrônica',
      },
      {
        id: '10',
        name: 'Informática',
      },
      {
        id: '11',
        name: 'Telecomunicações',
      },
    ],
    id: '7',
    name: 'ITB BRASÍLIO FLORES DE AZEVEDO',
  },
  school_year: 3,
  shift: SHIFTS.MORNING,
  subjects: [
    { id: '12', name: 'fisica' },
    { id: '13', name: 'matematica' },
    { id: '14', name: 'quimica' },
  ],
  gender: GENDERS_ENUM.MALE,
  id: '90',
})

const UserProfile: React.FC = () => {
  return (
    <Container>
      <Title>Meu Perfil</Title>

      <Styled.EditButtonContainer>
        <Styled.EditButton>
          <Feather name="edit" color={theme.colors.primary.purple} size={24} />
        </Styled.EditButton>
      </Styled.EditButtonContainer>

      <Scroll>
        <StudentInfo student={user} />
      </Scroll>
    </Container>
  )
}

export default UserProfile
