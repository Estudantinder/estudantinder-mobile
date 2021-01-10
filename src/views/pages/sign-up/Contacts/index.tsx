import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import { useSignUpContext } from 'main/context/sign-up'
import ContactsEntity from 'main/entities/Contacts'
import ValidateSignUpContacts from 'main/validators/sign-up/Contacts'

import Header from 'views/components/organisms/Header'

import Styled from './styles'

const Contacts: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { contacts, setContacts } = useSignUpContext()

  function handleNavigateToDetails() {
    router.navigate('sign-up/Details')
  }

  async function handleSubmit(data: ContactsEntity) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateSignUpContacts()

      await schema.validate(data, {
        abortEarly: false,
      })

      setContacts(data)

      handleNavigateToDetails()
    } catch (err) {
      const validationErrors: Record<string, string> = {}

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        return formRef?.current?.setErrors(validationErrors)
      }

      return alert(err)
    }

    handleNavigateToDetails()
  }

  return (
    <Styled.Container>
      <Header title="Seus Contatos" />

      <Styled.Main>
        <Form ref={formRef} initialData={contacts} onSubmit={handleSubmit}>
          <Styled.FacebookInput
            name="facebook"
            label="Facebook"
            placeholder="Ex: Mariana Dias"
          />
          <Styled.InstagramInput
            name="instagram"
            label="Instagram"
            placeholder="Ex: @estudantinder"
          />
          <Styled.WhatsappInput
            name="whatsapp"
            label="Whatsapp"
            placeholder="Ex: (11) 00000-0000"
          />
          <Styled.TwitterInput
            name="twitter"
            label="Twitter"
            placeholder="Ex: @estudantinder"
          />
        </Form>
      </Styled.Main>
    </Styled.Container>
  )
}

export default Contacts
