import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'
import { Platform } from 'react-native'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'
import { ValidationError } from 'yup'

import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Input from 'src/components/Input'
import { ISchool, useSignUpContext } from 'src/context/sign-up'
import ValidateSignUpSchool from 'src/validators/sign-up/School'
import SchoolStyled from 'src/views/sign-up/School/styles/School.styled'

import SignUpCoursePicker from './components/CoursePicker'
import SignUpSchoolYearPicker from './components/SchoolYearPicker'
import SignUpShiftPicker from './components/ShiftPicker'

const School: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const { school, setSchool } = useSignUpContext()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  async function handleSubmit(data: ISchool) {
    console.log(data)

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
    <SchoolStyled.Container
      behavior={Platform.OS == 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={10}
    >
      <SchoolStyled.Scroll
        contentContainerStyle={{
          minHeight: '100%',
          justifyContent: 'center',
        }}
      >
        <Header title="Informações escolares" />

        <SchoolStyled.Main>
          <Form ref={formRef} onSubmit={handleSubmit} initialData={school}>
            <SignUpCoursePicker />
            <SignUpSchoolYearPicker />
            <SignUpShiftPicker />
            <Input name="classroom" label="Sala" placeholder="Ex: F" />
          </Form>
        </SchoolStyled.Main>

        <Footer
          onPress={() => formRef.current?.submitForm()}
          buttonTitle="Continuar"
        />
      </SchoolStyled.Scroll>
    </SchoolStyled.Container>
  )
}

export default School
