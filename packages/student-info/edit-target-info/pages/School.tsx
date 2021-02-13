import React, { useRef } from 'react'

import { FormHandles } from '@unform/core'
import { Form } from '@unform/mobile'

import useSchoolsData from 'packages/api/swr-hooks/useSchoolsData'
import PrimaryButton from 'packages/components/PrimaryButton'
import RowOptionsPicker from 'packages/components/RowOptions/Picker'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { SHIFTS } from 'packages/entities/Shift'
import { StudentSchool } from 'packages/entities/Student'
import Input from 'packages/inputs/components/Input'
import validateSchema from 'packages/validation'
import UnformValidationError from 'packages/validation/UnformValidationError'

import StudentSchoolSchema from '../../validators/StudentSchoolSchema'
import SchoolCoursePicker from '../components/SchoolCoursePicker'
import { EditTargetInfoProps } from '../EditTargetInfoProps'

type EditStudentSchoolProps = EditTargetInfoProps<StudentSchool>

type SchoolFormData = Modify<
  StudentSchool,
  {
    school: string
    course: string
  }
>

const EditStudentSchool: React.FC<EditStudentSchoolProps> = (props) => {
  const ref = useRef<FormHandles>(null)

  const { schools } = useSchoolsData()

  const formRef = props.formRef || ref

  const handleSubmit = async (data: SchoolFormData) => {
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

      props.setData?.(validatedData as StudentSchool)

      props.onSubmitSuccess?.()
    } catch (error) {
      if (error instanceof UnformValidationError) {
        formRef.current?.setErrors(error.validationErrors)

        formRef.current?.setFieldError(
          'school',
          error.validationErrors['school.id']
        )

        formRef.current?.setFieldError(
          'course',
          error.validationErrors['course.id']
        )

        return
      }

      return alert(error)
    }
  }

  const submitForm = () => formRef.current?.submitForm()

  function getDefaultValues(data?: StudentSchool) {
    return {
      classroom: data?.classroom,
      course: String(data?.course?.id),
      school: String(data?.school?.id),
      school_year: String(data?.school_year),
      shift: String(data?.shift),
    }
  }

  return (
    <StackPageTemplate title="Informações Escolares">
      <Form
        ref={formRef}
        onSubmit={props.handleSubmit || handleSubmit}
        initialData={getDefaultValues(props.initialData)}
      >
        <SchoolCoursePicker formRef={formRef} />

        <RowOptionsPicker
          testID="school_year"
          name="school_year"
          label="Série"
          options={[
            { label: '1º ano', value: '1' },
            { label: '2º ano', value: '2' },
            { label: '3º ano', value: '3' },
          ]}
        />

        <RowOptionsPicker
          testID="shift"
          name="shift"
          label="Turno"
          options={[
            { label: 'Manhã', value: String(SHIFTS.MORNING) },
            { label: 'Tarde', value: String(SHIFTS.AFTERNOON) },
          ]}
        />

        <Input
          testID="classroom"
          name="classroom"
          label="Sala"
          placeholder="Ex: F"
          maxLength={1}
          onSubmitEditing={submitForm}
          autoCapitalize="words"
          blurOnSubmit
          returnKeyType="done"
        />
      </Form>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentSchool
