import React, { Fragment, useMemo } from 'react'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import PrimaryLabel from 'packages/components/PrimaryLabel'
import Student from 'packages/entities/Student'
import { Row, HorizontalDivider } from 'packages/styles'
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

        <Row style={{ marginTop: 6 }}>
          {student.subjects.map((value, index) => {
            if (student.subjects[index + 1]) {
              return (
                <Fragment key={value.id}>
                  <PrimaryLabel>{value.name.toUpperCase()}</PrimaryLabel>
                  <HorizontalDivider width={4} />
                </Fragment>
              )
            }

            return (
              <PrimaryLabel key={value.id}>
                {value.name.toUpperCase()}
              </PrimaryLabel>
            )
          })}
        </Row>
      </StudentCardFooter>
    </StudentCardContainer>
  )
}

export default StudentCard
