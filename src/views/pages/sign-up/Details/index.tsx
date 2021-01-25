import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import { StudentDetails } from 'main/entities/Student'
import validateSchema from 'main/validation'
import { StudentDetailsSchema } from 'main/validation/schemas/StudentSchemas'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import SubjectsPicker from 'views/components/organisms/SubjectsPicker'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

import Styled from './styles'

const Details: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { details, setDetails } = useSignUpContext()

  function handleNavigateToPhotos() {
    return router.navigate('sign-up/Photos')
  }

  async function handleSubmit(data: StudentDetails) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const validatedData = await validateSchema(StudentDetailsSchema, data)

      setDetails(validatedData)

      handleNavigateToPhotos()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alert(error)
    }
  }

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  return (
    <FormPageTemplate title="Um pouco sobre você">
      <SignUpForm ref={formRef} onSubmit={handleSubmit} initialData={details}>
        <Styled.TextAreaInput
          name="bio"
          label="Biografia"
          info="Máximo de 256 caracteres"
          maxLength={256}
          textAlignVertical="top"
          multiline
        />

        <SubjectsPicker />
      </SignUpForm>

      <PrimaryButton onPress={handlePressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default Details
