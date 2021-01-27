import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import { StudentAbout } from 'main/entities/Student'
import validateSchema from 'main/validation'
import { StudentAboutSchema } from 'main/validation/schemas/StudentSchemas'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import PersonDatePicker from 'views/components/molecules/BirthDatePicker'
import GenderPicker from 'views/components/molecules/GenderPicker'
import Input from 'views/components/molecules/Input'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

const Person: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { person, setPerson } = useSignUpContext()

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  function handleNavigateToSchool() {
    router.navigate('sign-up/School')
  }

  async function handleSubmit(data: StudentAbout) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(StudentAboutSchema, data)

      setPerson(validatedData)

      handleNavigateToSchool()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        formRef.current?.setErrors(error)

        const genderError = formRef.current?.getFieldError('gender')

        if (genderError) {
          formRef.current?.setFieldError('custom_gender', genderError)
        }

        return
      }

      return alert(error)
    }
  }

  return (
    <FormPageTemplate title="Suas Informações">
      <SignUpForm ref={formRef} onSubmit={handleSubmit} initialData={person}>
        <Input
          name="name"
          label="Nome Completo"
          blurOnSubmit
          onSubmitEditing={() =>
            formRef.current?.getFieldRef('birth_date').focus()
          }
        />

        <PersonDatePicker />

        <GenderPicker />
      </SignUpForm>

      <PrimaryButton onPress={handlePressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default Person
