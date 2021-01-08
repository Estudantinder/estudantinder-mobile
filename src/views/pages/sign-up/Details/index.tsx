import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import { IDetails, useSignUpContext } from 'main/context/sign-up'
import ValidateSignUpDetails from 'main/validators/sign-up/Details'

import SubjectsPicker from 'views/components/molecules/SignUpSubjectsPicker'
import Footer from 'views/components/organisms/Footer'
import Header from 'views/components/organisms/Header'

import Styled from './styles'

const Details: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { details, setDetails } = useSignUpContext()

  function handleNavigateToImages() {
    router.navigate('sign-up/Images')
  }

  async function handleSubmit(data: IDetails) {
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
      const validationErrors: Record<string, string> = {}

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        return formRef?.current?.setErrors(validationErrors)
      }

      return alert(err)
    }

    handleNavigateToImages()
  }

  return (
    <Styled.Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <Styled.Scroll
        contentContainerStyle={{
          minHeight: '100%',
          justifyContent: 'center',
        }}
      >
        <Header title="Um pouco sobre você" />

        <Styled.Main>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={details}>
            <Styled.TextAreaInput
              name="description"
              label="Descrição"
              maxLength={256}
              textAlignVertical="top"
              multiline
            />
            <SubjectsPicker />
          </Form>
        </Styled.Main>

        <Footer
          onPress={() => formRef.current?.submitForm()}
          buttonTitle="Continuar"
        />
      </Styled.Scroll>
    </Styled.Container>
  )
}

export default Details
