import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { ValidationError } from 'yup'

import { useSignUpContext } from 'main/context/sign-up'
import { UserDetails } from 'main/entities/User'
import ValidateSignUpDetails from 'main/validators/sign-up/Details'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SubjectsPicker from 'views/components/molecules/SignUpSubjectsPicker'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, SignUpForm } from 'views/styles/globalStyles'

import setValidationErrors from 'shared/setValidationErrors'

import Styled from './styles'

const Details: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { details, setDetails } = useSignUpContext()

  function handleNavigateToImages() {
    router.navigate('sign-up/Images')
  }

  async function handleSubmit(data: UserDetails) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateSignUpDetails()

      await schema.validate(data, {
        abortEarly: false,
      })

      setDetails(data)

      handleNavigateToImages()
    } catch (err) {
      if (err instanceof ValidationError) {
        return setValidationErrors(err, formRef)
      }

      return alert(err)
    }

    handleNavigateToImages()
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
