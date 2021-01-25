/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useNavigation } from '@react-navigation/native'
import React, { useCallback, useRef, useState } from 'react'

import { FormHandles } from '@unform/core'

import useSchoolsData from 'main/api/swr-hooks/useSchoolsData'
import { useSignUpContext } from 'main/context/sign-up'
import SchoolEntity from 'main/entities/School'
import { StudentSchool } from 'main/entities/Student'
import validateSchema from 'main/validation'
import { StudentSchoolSchema } from 'main/validation/schemas/StudentSchemas'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import Input from 'views/components/molecules/Input'
import RowOptionsPicker from 'views/components/molecules/RowOptionsPicker'
import Select from 'views/components/molecules/Select'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { SignUpForm } from 'views/styles/globalStyles'
import arrayToItems from 'views/utils/arrayToItems'

import { SHIFTS } from 'shared/constants'
import FormattedValidationError from 'shared/FormattedValidationError'

type SchoolFormData = Omit<StudentSchool, 'school' | 'course'> & {
  school: string
  course: string
}

const School: React.FC = () => {
  const router = useNavigation()

  const formRef = useRef<FormHandles>(null)

  const context = useSignUpContext()

  const schoolsApi = useSchoolsData()

  function handleNavigateToContacts() {
    return router.navigate('sign-up/Contacts')
  }

  const [currentSchool, setCurrentSchool] = useState<SchoolEntity | undefined>(
    context.school?.school
  )

  async function handleSubmit(data: SchoolFormData) {
    try {
      // Remove all previous errors
      formRef?.current?.setErrors({})

      const course = currentSchool?.courses.find(
        (value) => String(value.id) === data.course
      )

      const validatedData = await validateSchema(StudentSchoolSchema, {
        ...data,
        school: currentSchool,
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

  const getCurrentSchool = useCallback(
    (schoolId: string) => {
      const school = schoolsApi.schools?.find(
        (value) => value.id === String(schoolId)
      )

      formRef.current?.setFieldValue('course', undefined)

      setCurrentSchool(school)
    },
    [schoolsApi.schools]
  )

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
        <Select
          name="school"
          label="Escola"
          placeholder={{
            label: 'Escolha uma escola',
            value: null,
            color: '#ccc',
          }}
          info={schoolsApi.error?.name}
          items={
            schoolsApi.schools
              ? arrayToItems(schoolsApi.schools, {
                  label: 'address',
                  value: 'id',
                })
              : []
          }
          disabled={!schoolsApi.schools || !schoolsApi.schools.length}
          onValueChange={getCurrentSchool}
        />

        <Select
          name="course"
          label="Curso"
          placeholder={{
            label: 'Escolha um curso',
            value: null,
            color: '#ccc',
          }}
          info={!currentSchool ? 'Selecione uma escola primeiro!' : undefined}
          items={
            currentSchool
              ? arrayToItems(currentSchool.courses, {
                  label: 'name',
                  value: 'id',
                })
              : []
          }
          disabled={!currentSchool}
        />

        <RowOptionsPicker
          name="school_year"
          label="Série"
          options={[
            { label: '1º ano', value: '1' },
            { label: '2º ano', value: '2' },
            { label: '3º ano', value: '3' },
          ]}
        />

        <RowOptionsPicker
          name="shift"
          label="Turno"
          options={[
            { label: 'Manhã', value: String(SHIFTS.MORNING) },
            { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
          ]}
        />

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
