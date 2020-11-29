import { useNavigation } from '@react-navigation/native'
import React from 'react'

import ContactsStyled from 'src/styles/pages/sign-up/Contacts.styled'

const Contacts: React.FC = () => {
  const router = useNavigation()

  function handleNavigateToDetails() {
    router.navigate('sign-up/Details')
  }

  return (
    <ContactsStyled.Container>
      <ContactsStyled.Header>
        <ContactsStyled.Title>Adicione seus contatos</ContactsStyled.Title>
      </ContactsStyled.Header>

      <ContactsStyled.Main>
        <ContactsStyled.Input placeholder="Facebook" />
        <ContactsStyled.Input placeholder="Instagram" />
        <ContactsStyled.Input placeholder="Whatsapp" />
        <ContactsStyled.Input placeholder="Twitter" />
      </ContactsStyled.Main>

      <ContactsStyled.Footer>
        <ContactsStyled.Button onPress={handleNavigateToDetails}>
          <ContactsStyled.ButtonText>Continuar</ContactsStyled.ButtonText>
        </ContactsStyled.Button>
      </ContactsStyled.Footer>
    </ContactsStyled.Container>
  )
}

export default Contacts
