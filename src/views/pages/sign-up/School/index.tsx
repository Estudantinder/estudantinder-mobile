import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { useSignUpContext } from 'main/context/sign-up'
import { UserSchool } from 'main/entities/User'
import ValidateSignUpSchool from 'main/validators/sign-up/School'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import Input from 'views/components/atoms/Input'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import SignUpCoursePicker from 'views/components/molecules/SignUpCoursePicker'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import { SHIFTS } from 'shared/Constants'
import setValidationErrors from 'shared/setValidationErrors'

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

      const schema = ValidateSignUpSchool()

      await schema.validate(data, {
        abortEarly: false,
      })

      setSchool(data)

      handleNavigateToContacts()
    } catch (err) {
      if (err instanceof ValidationError) {
        return setValidationErrors(err, formRef)
      }

      return alert(err)
    }

    handleNavigateToContacts()
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Informações Escolares</FormTitle>

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
            onSubmitEditing={handleButtonPress}
            blurOnSubmit
          />
        </SignUpForm>

        <FormButton onPress={handleButtonPress} title="CONTINUAR" />
      </FormMain>
    </SignUpContainer>
  )
}

export default School
