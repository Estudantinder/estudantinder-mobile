import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { ISchool, useSignUpContext } from 'src/context/sign-up'
import SchoolStyled from 'src/styles/pages/sign-up/School.styled'

const School: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { school, setSchool } = useSignUpContext()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  function handleSubmit(data: ISchool) {
    setSchool(data)

    handleNavigateToContacts()
  }

  return (
    <SchoolStyled.Container>
      <SchoolStyled.Header>
        <SchoolStyled.Title>Informações escolares</SchoolStyled.Title>
      </SchoolStyled.Header>

      <SchoolStyled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={school}>
          <Input name="school" label="Escola" />
          <Input name="course" label="Curso" />
          <Input name="grade" label="Série" />
          <Input name="period" label="Turno" />
          <Input name="classroom" label="Sala" />
        </Form>
      </SchoolStyled.Main>

      <SchoolStyled.Footer>
        <SchoolStyled.Button onPress={() => formRef.current?.submitForm()}>
          <SchoolStyled.ButtonText>Continuar</SchoolStyled.ButtonText>
        </SchoolStyled.Button>
      </SchoolStyled.Footer>
    </SchoolStyled.Container>
  )
}

export default School
