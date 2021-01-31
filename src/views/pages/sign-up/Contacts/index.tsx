import { useNavigation } from '@react-navigation/native'
import React, { useRef, useState } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import ContactsEntity from 'main/entities/Contacts'
import validateSchema from 'main/validation'
import ContactsSchema from 'main/validation/schemas/ContactsSchema'

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

      let twitter, instagram

      if (data.twitter) {
        if (data.twitter[0] !== '@') twitter = '@' + data.twitter
        else twitter = data.twitter
      }

      if (data.instagram) {
        if (data.instagram[0] !== '@') instagram = '@' + data.instagram
        else instagram = data.instagram
      }

      // eslint-disable-next-line prefer-const
      let { whatsapp, ...validatedData } = await validateSchema(
        ContactsSchema,
        {
          ...data,
          twitter,
          instagram,
        }
      )

      if (whatsapp) {
        if (whatsapp.substr(0, 2) !== '55') whatsapp = '55' + whatsapp
      }

      console.log({ ...validatedData, whatsapp })

      setContacts({ ...validatedData, whatsapp })

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
          placeholder="Ex: estudantinder"
          style={{ borderColor: `#dfe5f2` }}
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('instagram').focus()
          }
          autoCapitalize="words"
        />
        <Styled.InstagramInput
          name="instagram"
          label="Instagram"
          placeholder="Ex: @estudantinder"
          style={{ borderColor: `#fde6ef` }}
          keyboardType={Platform.OS === 'ios' ? 'twitter' : 'email-address'}
          autoCompleteType="username"
          autoCapitalize="none"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('whatsapp').focus()
          }
        />
        <Styled.WhatsappInput
          type="cel-phone"
          options={{ dddMask: '(11) ' }}
          name="whatsapp"
          label="Whatsapp"
          placeholder="Ex: (11) 00000-0000"
          style={{ borderColor: `#e0efdf` }}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('twitter').focus()
          }
          maxLength={15}
        />

        <Styled.TwitterInput
          name="twitter"
          label="Twitter"
          placeholder="Ex: @estudantinder"
          blurOnSubmit
          returnKeyType="done"
          onSubmitEditing={handlePressSubmit}
          autoCompleteType="username"
          autoCapitalize="none"
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
