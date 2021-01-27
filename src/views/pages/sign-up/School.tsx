import { useNavigation } from '@react-navigation/native'
import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import { useSignUpContext } from 'main/context/sign-up'
import { StudentSchool } from 'main/entities/Student'
import validateSchema from 'main/validation'
import { StudentSchoolSchema } from 'main/validation/schemas/StudentSchemas'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Input from 'views/components/molecules/Input'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import SchoolCoursePicker from 'views/components/organisms/SchoolCoursePicker'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'

import { SCHOOL_YEARS_ITEMS, SHIFTS_ITEMS } from 'shared/constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type SchoolFormData = Omit<StudentSchool, 'school' | 'course'> & {
  school: string
  course: string
}

const School: React.FC = () => {
  const router = useNavigation()

  const { schools } = useSchoolsData()

  const formRef = useRef<FormHandles>(null)

  const context = useSignUpContext()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  async function handleSubmit(data: SchoolFormData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const school = schools?.find((value) => String(value.id) === data.school)

      const course = school?.courses.find(
        (value) => String(value.id) === data.course
      )

      const validatedData = await validateSchema(StudentSchoolSchema, {
        ...data,
        school,
        course,
      })

      context.setSchool(validatedData as StudentSchool)

      handleNavigateToContacts()
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        formRef.current?.setErrors(error.validationErrors)

        if (error.validationErrors['school.id']) {
          formRef.current?.setFieldError('school', 'A escola é obrigatória')
        }

        if (error.validationErrors['course.id']) {
          formRef.current?.setFieldError('course', 'O curso é obrigatório')
        }

        return
      }

      return alert(error)
    }

    handleNavigateToContacts()
  }

  function handlePressSubmit() {
    formRef.current?.submitForm()
  }

  function getDefaultValues() {
    return {
      classroom: context.school?.classroom,
      course: String(context.school?.course?.id),
      school: String(context.school?.school?.id),
      school_year: String(context.school?.school_year),
      shift: String(context.school?.shift),
    }
  }

  return (
    <FormPageTemplate title="Informações Escolares">
      <SignUpForm
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={getDefaultValues()}
      >
        <SchoolCoursePicker formRef={formRef} />

        <RowOptionsPicker
          name="school_year"
          label="Série"
          options={SCHOOL_YEARS_ITEMS}
        />

        <RowOptionsPicker name="shift" label="Turno" options={SHIFTS_ITEMS} />

        <Input
          name="classroom"
          label="Sala"
          placeholder="Ex: F"
          maxLength={1}
          onSubmitEditing={handlePressSubmit}
          blurOnSubmit
          returnKeyType="done"
        />
      </SignUpForm>

      <PrimaryButton onPress={handlePressSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default School
