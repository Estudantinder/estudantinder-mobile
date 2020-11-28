import { useNavigation } from '@react-navigation/native'
import React from 'react'

import PersonStyled from '../../styles/pages/sign-up/Person.styled'

const Person: React.FC = () => {
  const router = useNavigation()

  function handleNavigateToSchool() {
    router.navigate('sign-up/School')
  }

  return (
    <PersonStyled.Container>
      <PersonStyled.Header>
        <PersonStyled.Title>Suas informações</PersonStyled.Title>
      </PersonStyled.Header>

      <PersonStyled.Main>
        <PersonStyled.Input placeholder="Nome Completo" />
        <PersonStyled.Input placeholder="Data de nascimento" />
        <PersonStyled.Input placeholder="Gênero (opcional)" />
      </PersonStyled.Main>

      <PersonStyled.Footer>
        <PersonStyled.Button onPress={handleNavigateToSchool}>
          <PersonStyled.ButtonText>Continuar</PersonStyled.ButtonText>
        </PersonStyled.Button>
      </PersonStyled.Footer>
    </PersonStyled.Container>
  )
}

export default Person
