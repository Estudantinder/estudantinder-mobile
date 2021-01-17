import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import { useSignUpContext } from 'main/context/sign-up'
import { UserDetails } from 'main/entities/User'
import validateUserDetailsData from 'main/use-cases/create-user/validation/UserDetails'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SubjectsPicker from 'views/components/molecules/SignUpSubjectsPicker'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import FormattedValidationError from 'shared/FormattedValidationError'

import Styled from './styles'

const Details: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { details, setDetails } = useSignUpContext()

  function handleNavigateToImages() {
    return router.navigate('sign-up/Images')
  }

  async function handleSubmit(data: UserDetails) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      await validateUserDetailsData(data)

      setDetails(data)

      handleNavigateToImages()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        return formRef.current?.setErrors(error.validationErrors)
      }

      return alert(error)
    }
  }

  function handleButtonPress() {
    formRef.current?.submitForm()
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Um pouco sobre você</FormTitle>

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

        <FormButton onPress={handleButtonPress} title="CONTINUAR" />
      </FormMain>
    </SignUpContainer>
  )
}

export default Details
