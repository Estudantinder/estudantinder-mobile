import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { useSignUpContext } from 'main/context/sign-up'
import ContactsEntity from 'main/entities/Contacts'
import ValidateSignUpContacts from 'main/validators/sign-up/Contacts'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import InputBottom from 'views/components/atoms/InputBottom'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import setValidationErrors from 'shared/setValidationErrors'

import Styled from './styles'

const Contacts: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { contacts, setContacts } = useSignUpContext()

  function handleNavigateToDetails() {
    router.navigate('sign-up/Details')
  }

  const [isEmpty, setIsEmpty] = useState(false)

  async function handleSubmit(data: ContactsEntity) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      if (!Object.entries(data).find((value) => !!value[1]))
        return setIsEmpty(true)

      setIsEmpty(false)

      const schema = ValidateSignUpContacts()

      await schema.validate(data, {
        abortEarly: false,
      })

      setContacts(data)

      handleNavigateToDetails()
    } catch (err) {
      if (err instanceof ValidationError) {
        return setValidationErrors(err, formRef)
      }

      return alert(err)
    }

    handleNavigateToDetails()
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Seus Contatos</FormTitle>

        <SignUpForm
          ref={formRef}
          initialData={contacts}
          onSubmit={handleSubmit}
        >
          <Styled.FacebookInput
            name="facebook"
            label="Facebook"
            placeholder="Ex: Mariana Dias"
            style={{ borderColor: `#dfe5f2` }}
            onSubmitEditing={() =>
              formRef.current?.getFieldRef('instagram').focus()
            }
          />
          <Styled.InstagramInput
            name="instagram"
            label="Instagram"
            placeholder="Ex: @estudantinder"
            style={{ borderColor: `#fde6ef` }}
            onSubmitEditing={() =>
              formRef.current?.getFieldRef('whatsapp').focus()
            }
          />
          <Styled.WhatsappInput
            name="whatsapp"
            label="Whatsapp"
            placeholder="Ex: (11) 00000-0000"
            style={{ borderColor: `#e0efdf` }}
            keyboardType="phone-pad"
            onSubmitEditing={() =>
              formRef.current?.getFieldRef('twitter').focus()
            }
          />
          <Styled.TwitterInput
            name="twitter"
            label="Twitter"
            placeholder="Ex: @estudantinder"
            blurOnSubmit
            returnKeyType="done"
            onSubmitEditing={handleButtonPress}
            keyboardType={Platform.OS === 'ios' ? 'twitter' : 'email-address'}
            style={{ borderColor: `#d2ecfc` }}
          />

          <InputBottom
            text={isEmpty ? 'Informe pelos menos um contato acima' : undefined}
          />
        </SignUpForm>

        <FormButton onPress={handleButtonPress} title="CONTINUAR" />
      </FormMain>
    </SignUpContainer>
  )
}

export default Contacts
