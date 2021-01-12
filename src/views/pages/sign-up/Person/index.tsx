import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { IPerson, useSignUpContext } from 'main/context/sign-up'
import ValidateSignUpPerson from 'main/validators/sign-up/Person'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import Input from 'views/components/atoms/Input'
import PersonDatePicker from 'views/components/atoms/SignUpDatePicker'
import PersonGenderPicker from 'views/components/molecules/SignUpGenderPicker'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import setValidationErrors from 'shared/setValidationErrors'

const Person: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { person, setPerson } = useSignUpContext()

  function onFormButtonPress() {
    formRef.current?.submitForm()
  }

  function handleNavigateToSchool() {
    router.navigate('sign-up/School')
  }

  async function handleSubmit(data: IPerson) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateSignUpPerson()

      await schema.validate(data, {
        abortEarly: false,
      })

      setPerson(data)

      handleNavigateToSchool()
    } catch (err) {
      if (err instanceof ValidationError) {
        setValidationErrors(err, formRef)

        const genderError = formRef.current?.getFieldError('gender')

        if (genderError) {
          formRef.current?.setFieldError('custom_gender', genderError)
        }

        return
      }

      return alert(err)
    }
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Suas Informações</FormTitle>

        <SignUpForm ref={formRef} onSubmit={handleSubmit} initialData={person}>
          <Input name="name" label="Nome Completo" />
          <PersonDatePicker />
          <PersonGenderPicker />
        </SignUpForm>

        <FormButton onPress={onFormButtonPress} title="Continuar" />
      </FormMain>
    </SignUpContainer>
  )
}

export default Person
