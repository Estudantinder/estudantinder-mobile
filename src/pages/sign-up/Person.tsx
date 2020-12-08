import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import Input from 'src/components/Input'
import { IPerson, useSignUpContext } from 'src/context/sign-up'
import PersonStyled from 'src/styles/pages/sign-up/Person.styled'
import ValidateSignUpPerson from 'src/validators/sign-up/Person'

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
    <PersonStyled.Container>
      <PersonStyled.Header>
        <PersonStyled.Title>Suas informações</PersonStyled.Title>
      </PersonStyled.Header>

      <PersonStyled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={person}>
          <Input name="name" label="Nome Completo" />
          <Input name="birth_date" label="Data de nascimento" />
          <Input name="gender" label="Gênero (opcional)" />
        </Form>
      </PersonStyled.Main>

      <PersonStyled.Footer>
        <PersonStyled.Button onPress={() => formRef.current?.submitForm()}>
          <PersonStyled.ButtonText>Continuar</PersonStyled.ButtonText>
        </PersonStyled.Button>
      </PersonStyled.Footer>
    </PersonStyled.Container>
  )
}

export default Person
