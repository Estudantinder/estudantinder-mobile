import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { IDetails, useSignUpContext } from 'src/context/sign-up'

import SubjectsPicker from './components/SubjectsPicker'
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
    <DetailsStyled.Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <DetailsStyled.Scroll
        contentContainerStyle={{
          minHeight: '100%',
          justifyContent: 'center',
        }}
      >
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
            <SubjectsPicker />
          </Form>
        </DetailsStyled.Main>

        <Footer
          onPress={() => formRef.current?.submitForm()}
          buttonTitle="Continuar"
        />
      </DetailsStyled.Scroll>
    </DetailsStyled.Container>
  )
}

export default Details
