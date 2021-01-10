import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import { IPerson, useSignUpContext } from 'main/context/sign-up'
import ValidateSignUpPerson from 'main/validators/sign-up/Person'

import Input from 'views/components/atoms/Input'
import PersonDatePicker from 'views/components/atoms/SignUpDatePicker'
import PersonGenderPicker from 'views/components/molecules/SignUpGenderPicker'
import Header from 'views/components/organisms/Header'

import Styled from './styles'

const Person: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { person, setPerson } = useSignUpContext()

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
      const validationErrors: Record<string, string> = {}

      if (err instanceof ValidationError) {
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message
        })

        return formRef?.current?.setErrors(validationErrors)
      }

      return alert(err)
    }
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
        <Header title="Suas informações" />

        <Styled.Main>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={person}>
            <Input name="name" label="Nome Completo" />
            <PersonDatePicker />
            <PersonGenderPicker />
          </Form>
        </Styled.Main>
      </Styled.Scroll>
    </Styled.Container>
  )
}

export default Person
