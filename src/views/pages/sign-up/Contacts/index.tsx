import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import ContactsEntity from 'main/entities/Contacts'
import validateContactsData from 'main/use-cases/create-user/validation/Contacts'

import InputInfo from 'views/components/atoms/InputInfo'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

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

      if (!Object.entries(data).find(([, value]) => !!value)) {
        return setIsEmpty(true)
      }

      setIsEmpty(false)

      await validateContactsData(data)

      setContacts(data)

      handleNavigateToDetails()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alert(error)
    }

    handleNavigateToDetails()
  }

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  return (
    <FormPageTemplate title="Seus Contatos">
      <SignUpForm ref={formRef} initialData={contacts} onSubmit={handleSubmit}>
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
          onSubmitEditing={handlePressSubmit}
          keyboardType={Platform.OS === 'ios' ? 'twitter' : 'email-address'}
          style={{ borderColor: `#d2ecfc` }}
        />

        <InputInfo>
          {isEmpty ? 'Informe pelos menos um contato acima' : undefined}
        </InputInfo>
      </SignUpForm>

      <PrimaryButton onPress={handlePressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default Contacts
