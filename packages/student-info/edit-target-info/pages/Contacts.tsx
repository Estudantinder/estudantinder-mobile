import React, { useRef, useState } from 'react'

import { FormHandles } from '@unform/core'
import { formatToGenericPhone } from 'brazilian-values'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import Contacts from 'packages/entities/Contacts'
import StudentContactsSchema from 'packages/student-info/validators/StudentContactsSchema'
import { StyledForm, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'
import alertModal from 'packages/utils/alertModal'
import focusOnInput from 'packages/utils/focusOnInput'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import {
  FacebookInput,
  InstagramInput,
  TwitterInput,
  WhatsappInput,
} from '../edit-target-info.styles'
import { EditTargetInfoProps } from '../EditTargetInfoProps'

export type EditStudentContactsProps = EditTargetInfoProps<Contacts>

const EditStudentContacts: React.FC<EditStudentContactsProps> = (props) => {
  const ref = useRef<FormHandles>(null)

  const formRef = props.formRef || ref

  const [isEmpty, setIsEmpty] = useState(false)

  const handleSubmit = async (data: Contacts) => {
    try {
      formRef.current?.setErrors({})

      if (!Object.entries(data).find(([, value]) => !!value)) {
        return setIsEmpty(true)
      }

      setIsEmpty(false)

      const validatedData = await validateSchema(StudentContactsSchema, data)

      props.setData?.(validatedData)

      props.onSubmitSuccess?.()
    } catch (error) {
      if (error instanceof UnformValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alertModal(error)
    }
  }

  const submitForm = () => {
    formRef.current?.submitForm()
  }

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
        onSubmit={props.handleSubmit || handleSubmit}
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
