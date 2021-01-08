import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import { ISchool, useSignUpContext } from 'main/context/sign-up'
import ValidateSignUpSchool from 'main/validators/sign-up/School'

import Input from 'views/components/atoms/Input'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import SignUpCoursePicker from 'views/components/molecules/SignUpCoursePicker'
import Footer from 'views/components/organisms/Footer'
import Header from 'views/components/organisms/Header'

import { Shifts } from 'shared/Shift'

import Styled from './styles'

const School: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { school, setSchool } = useSignUpContext()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  async function handleSubmit(data: ISchool) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const schema = ValidateSignUpSchool()

      await schema.validate(data, {
        abortEarly: false,
      })

      setSchool(data)

      handleNavigateToContacts()
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

    handleNavigateToContacts()
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
        <Header title="Informações escolares" />

        <Styled.Main>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={school}>
            <SignUpCoursePicker />
            <RowOptionsPicker
              name="school_year"
              options={[
                { label: '1 ano', value: '1' },
                { label: '2 ano', value: '2' },
                { label: '3 ano', value: '3' },
              ]}
            />
            <RowOptionsPicker
              name="shift"
              options={[
                { label: 'Manha', value: String(Shifts.MORNING) },
                { label: 'Tarde', value: String(Shifts.AFTERNOON) },
              ]}
            />
            <Input
              name="classroom"
              label="Sala"
              placeholder="Ex: F"
              maxLength={1}
            />
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

export default School
