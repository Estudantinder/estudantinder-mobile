import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import { UserSchool } from 'main/entities/User'
import validateUserSchoolData from 'main/use-cases/create-user/validation/UserSchool'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Input from 'views/components/molecules/Input'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import SignUpCoursePicker from 'views/components/organisms/SignUpCoursePicker'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import { SHIFTS } from 'shared/Constants'
import FormattedValidationError from 'shared/FormattedValidationError'

const School: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { school, setSchool } = useSignUpContext()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  async function handleSubmit(data: UserSchool) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      await validateUserSchoolData(data)

      setSchool(data)

      handleNavigateToContacts()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alert(error)
    }

    handleNavigateToContacts()
  }

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  return (
    <FormPageTemplate title="Informações Escolares">
      <SignUpForm ref={formRef} onSubmit={handleSubmit} initialData={school}>
        <SignUpCoursePicker />

        <RowOptionsPicker
          name="school_year"
          label="Série"
          options={[
            { label: '1º ano', value: '1' },
            { label: '2º ano', value: '2' },
            { label: '3º ano', value: '3' },
          ]}
        />

        <RowOptionsPicker
          name="shift"
          label="Turno"
          options={[
            { label: 'Manhã', value: String(SHIFTS.MORNING) },
            { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
          ]}
        />

        <Input
          name="classroom"
          label="Sala"
          placeholder="Ex: F"
          maxLength={1}
          onSubmitEditing={handlePressSubmit}
          blurOnSubmit
        />
      </SignUpForm>

      <PrimaryButton onPress={handlePressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default School
