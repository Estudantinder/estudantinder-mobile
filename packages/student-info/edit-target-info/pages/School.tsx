import React from 'react'

import useSchoolsData from 'packages/api/swr-hooks/useSchoolsData'
import PrimaryButton from 'packages/components/PrimaryButton'
import RowOptionsPicker from 'packages/components/RowOptions/Picker'
import SchoolCoursePicker from 'packages/components/SchoolCoursePicker'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { SHIFTS } from 'packages/entities/Shift'
import { StudentSchool } from 'packages/entities/Student'
import Input from 'packages/inputs/components/Input'
import { StyledForm } from 'packages/styles'

import { EditTargetInfoProps } from '../EditTargetInfoProps'

type EditStudentSchoolProps = EditTargetInfoProps<StudentSchool>

export type SchoolFormData = Modify<
  StudentSchool,
  {
    school: string
    course: string
  }
>

const EditStudentSchool: React.FC<EditStudentSchoolProps> = (props) => {
  const formRef = props.formRef

  const { schools } = useSchoolsData()

  const submitForm = () => formRef.current?.submitForm()

  const handleSubmit = (data: SchoolFormData) => {
    const school = schools?.find((value) => String(value.id) === data.school)

    const course = school?.courses.find(
      (value) => String(value.id) === data.course
    )

    props.handleSubmit({ ...data, school, course } as StudentSchool)
  }

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
      <StyledForm
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={getDefaultValues(props.initialData)}
      >
        <SchoolCoursePicker
          formRef={formRef}
          defaultSchool={props.initialData?.school}
          defaultCourse={props.initialData?.course}
        />

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
      </StyledForm>

      <PrimaryButton testID="submit-button" onPress={submitForm}>
        CONTINUAR
      </PrimaryButton>
    </StackPageTemplate>
  )
}

export default EditStudentSchool
