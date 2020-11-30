import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { useSignUpContext } from 'src/context/sign-up'
import PersonStyled from 'src/styles/pages/sign-up/Person.styled'

interface FormData {
  birth_date: string
  name: string
  gender: string
}

const Person: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { person, setPerson } = useSignUpContext()

  function handleNavigateToSchool() {
    router.navigate('sign-up/School')
  }

  function handleSubmit(data: FormData) {
    setPerson(data)
    handleNavigateToSchool()
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
