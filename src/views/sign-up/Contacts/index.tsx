import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { useSignUpContext } from 'src/context/sign-up'
import ContactsEntity from 'src/entities/Contacts'
import ValidateSignUpContacts from 'src/validators/sign-up/Contacts'

import ContactsStyled from './styles/Contacts.styled'
import ContactsInputsStyled from './styles/ContactsInputs.styled'

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
    <ContactsStyled.Container>
      <Header title="Seus Contatos" />

      <ContactsStyled.Main>
        <Form ref={formRef} initialData={contacts} onSubmit={handleSubmit}>
          <ContactsInputsStyled.FacebookInput
            name="facebook"
            label="Facebook"
            placeholder="Ex: Mariana Dias"
          />
          <ContactsInputsStyled.InstagramInput
            name="instagram"
            label="Instagram"
            placeholder="Ex: @estudantinder"
          />
          <ContactsInputsStyled.WhatsappInput
            name="whatsapp"
            label="Whatsapp"
            placeholder="Ex: (11) 00000-0000"
          />
          <ContactsInputsStyled.TwitterInput
            name="twitter"
            label="Twitter"
            placeholder="Ex: @estudantinder"
          />
        </Form>
      </ContactsStyled.Main>

      <Footer
        onPress={() => formRef.current?.submitForm()}
        buttonTitle="Continuar"
      />
    </ContactsStyled.Container>
  )
}

export default Contacts
