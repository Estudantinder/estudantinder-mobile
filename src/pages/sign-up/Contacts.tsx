import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { useSignUpContext } from 'src/context/sign-up'
import ContactsEntity from 'src/entities/Contacts'
import ContactsStyled from 'src/styles/pages/sign-up/Contacts.styled'

const Contacts: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { contacts, setContacts } = useSignUpContext()

  function handleNavigateToDetails() {
    router.navigate('sign-up/Details')
  }

  function handleSubmit(data: ContactsEntity) {
    setContacts(data)

    handleNavigateToDetails()
  }

  return (
    <ContactsStyled.Container>
      <ContactsStyled.Header>
        <ContactsStyled.Title>Adicione seus contatos</ContactsStyled.Title>
      </ContactsStyled.Header>

      <ContactsStyled.Main>
        <Form ref={formRef} initialData={contacts} onSubmit={handleSubmit}>
          <Input name="facebook" label="Facebook" />
          <Input name="instagram" label="Instagram" />
          <Input name="whatsapp" label="Whatsapp" />
          <Input name="twitter" label="Twitter" />
        </Form>
      </ContactsStyled.Main>

      <ContactsStyled.Footer>
        <ContactsStyled.Button onPress={() => formRef.current?.submitForm()}>
          <ContactsStyled.ButtonText>Continuar</ContactsStyled.ButtonText>
        </ContactsStyled.Button>
      </ContactsStyled.Footer>
    </ContactsStyled.Container>
  )
}

export default Contacts
