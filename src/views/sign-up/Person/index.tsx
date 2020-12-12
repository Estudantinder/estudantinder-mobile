import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Input from 'src/components/Input'
import { IPerson, useSignUpContext } from 'src/context/sign-up'
import ValidateSignUpPerson from 'src/validators/sign-up/Person'

import { PersonDatePicker } from './components/DatePicker'
import PersonStyled from './styles/Person.styled'

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
    <PersonStyled.Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <PersonStyled.Scroll
        contentContainerStyle={{
          minHeight: '100%',
          justifyContent: 'center',
        }}
      >
        <Header title="Suas informações" />

        <PersonStyled.Main>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={person}>
            <Input name="name" label="Nome Completo" />
            <PersonDatePicker />
            <Input name="gender" label="Gênero (opcional)" />
          </Form>
        </PersonStyled.Main>

        <Footer
          buttonTitle="Continuar"
          onPress={() => formRef.current?.submitForm()}
        />
      </PersonStyled.Scroll>
    </PersonStyled.Container>
  )
}

export default Person
