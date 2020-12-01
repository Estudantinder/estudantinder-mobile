import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Input from 'src/components/Input'
import { IDetails, useSignUpContext } from 'src/context/sign-up'
import DetailsStyled from 'src/styles/pages/sign-up/Details.styled'

const Details: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { details, setDetails } = useSignUpContext()

  function handleNavigateToImages() {
    router.navigate('sign-up/Images')
  }

  function handleSubmit(data: IDetails) {
    console.log(data)

    setDetails(data)

    handleNavigateToImages()
  }

  return (
    <DetailsStyled.Container>
      <DetailsStyled.Header>
        <DetailsStyled.Title>Um pouco sobre você</DetailsStyled.Title>
      </DetailsStyled.Header>

      <DetailsStyled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={details}>
          <Input name="description" label="Descrição" />
          <Input name="subjects[0]" label="Matéria 1" />
          <Input name="subjects[1]" label="Matéria 2" />
          <Input name="subjects[2]" label="Matéria 3" />
        </Form>
      </DetailsStyled.Main>

      <DetailsStyled.Footer>
        <DetailsStyled.Button onPress={() => formRef.current?.submitForm()}>
          <DetailsStyled.ButtonText>Continuar</DetailsStyled.ButtonText>
        </DetailsStyled.Button>
      </DetailsStyled.Footer>
    </DetailsStyled.Container>
  )
}

export default Details
