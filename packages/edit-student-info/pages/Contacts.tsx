import React, { useState } from 'react'

import { formatToGenericPhone } from 'brazilian-values'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import Contacts from 'packages/entities/Contacts'
import { StyledForm, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'
import focusOnInput from 'packages/utils/focusOnInput'

import {
  FacebookInput,
  InstagramInput,
  TwitterInput,
  WhatsappInput,
} from '../edit-student-info.styles'
import { EditStudentInfoProps } from '../EditStudentInfoProps'

export type EditStudentContactsProps = EditStudentInfoProps<Contacts>

const EditStudentContacts: React.FC<EditStudentContactsProps> = (props) => {
  const formRef = props.formRef

  const [isEmpty, setIsEmpty] = useState(false)

  const handleSubmit = async (data: Contacts) => {
    if (!Object.entries(data).find(([, value]) => !!value)) {
      return setIsEmpty(true)
    }

    setIsEmpty(false)

    await props.handleSubmit(data)
  }

  const submitForm = () => formRef.current?.submitForm()

  const [whatsapp, setWhatsapp] = useState(props.initialData?.whatsapp)

  const handleChangeWhatsapp = (value: string) => {
    const newValue = formatToGenericPhone(value)

    setWhatsapp(newValue)

    return newValue
  }

  return (
    <StackPageTemplate title="Adicione seus contatos">
      <Subtitle style={{ color: isEmpty ? theme.colors.input.error : '#000' }}>
        Informe pelos menos um contato abaixo
      </Subtitle>

      <StyledForm
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={props.initialData}
      >
        <FacebookInput
          label="Facebook"
          name="facebook"
          testID="facebook"
          placeholder="Ex: estudantinder"
          autoCompleteType="username"
          autoCapitalize="none"
          onSubmitEditing={() => focusOnInput(formRef, 'instagram')}
        />

        <InstagramInput
          label="Instagram"
          name="instagram"
          testID="instagram"
          placeholder="Ex: estudantinder"
          autoCompleteType="username"
          autoCapitalize="none"
          onSubmitEditing={() => focusOnInput(formRef, 'whatsapp')}
        />

        <WhatsappInput
          label="Whatsapp"
          name="whatsapp"
          testID="whatsapp"
          placeholder="Ex: (11) 00000-0000"
          onChangeText={handleChangeWhatsapp}
          value={whatsapp}
          keyboardType="phone-pad"
          autoCompleteType="tel"
          onSubmitEditing={() => focusOnInput(formRef, 'twitter')}
        />

        <TwitterInput
          label="Twitter"
          name="twitter"
          testID="twitter"
          placeholder="Ex: estudantinder"
          blurOnSubmit
          returnKeyType="done"
          autoCompleteType="username"
          autoCapitalize="none"
          onSubmitEditing={submitForm}
        />
      </StyledForm>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentContacts
