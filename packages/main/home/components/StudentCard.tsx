import React, { useMemo } from 'react'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import SubjectsRow from 'packages/components/SubjectsRow'
import Student from 'packages/entities/Student'
import { Row } from 'packages/styles'
import capitalize from 'packages/utils/capitalize'

import {
  StudentCardContainer,
  StudentCardFooter,
  StudentCardFooterText,
  StudentCardImage,
  StudentCardNameText,
} from './home-components.styles'

export interface StudentCardProps {
  student: Student
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const studentAdapter = useMemo(() => new StudentDataAdapter(student), [
    student,
  ])

  return (
    <StudentCardContainer>
      <StudentCardImage
        resizeMode="cover"
        source={{
          uri: student.photos[0],
        }}
      />

      <StudentCardFooter>
        <Row>
          <StudentCardNameText>
            {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
          </StudentCardNameText>
        </Row>

        <StudentCardFooterText>
          {capitalize(student.school.address, 2)} -{' '}
          {capitalize(student.course.name)}
        </StudentCardFooterText>
        <StudentCardFooterText>
          {student.school_year}º ano {student.classroom}{' '}
          {studentAdapter.getShift()}
        </StudentCardFooterText>

        <SubjectsRow subjects={student.subjects} />
      </StudentCardFooter>
    </StudentCardContainer>
  )
}

export default StudentCard
