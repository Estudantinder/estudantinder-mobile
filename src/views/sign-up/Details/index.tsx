import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Input from 'src/components/Input'
import { IDetails, useSignUpContext } from 'src/context/sign-up'

import DetailsStyled from './styles/Details.styled'

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
      <Header title="Um pouco sobre você" />

      <DetailsStyled.Main>
        <Form ref={formRef} onSubmit={handleSubmit} initialData={details}>
          <DetailsStyled.TextAreaInput
            name="description"
            label="Descrição"
            maxLength={256}
            textAlignVertical="top"
            multiline
          />
          <Input name="subjects[0]" label="Matéria 1" />
          <Input name="subjects[1]" label="Matéria 2" />
          <Input name="subjects[2]" label="Matéria 3" />
        </Form>
      </DetailsStyled.Main>

      <Footer
        onPress={() => formRef.current?.submitForm()}
        buttonTitle="Continuar"
      />
    </DetailsStyled.Container>
  )
}

export default Details
