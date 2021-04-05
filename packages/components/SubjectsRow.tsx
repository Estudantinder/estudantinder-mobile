import React, { Fragment } from 'react'

import Subject from 'packages/entities/Subject'
import { Row, HorizontalDivider } from 'packages/styles'

import PrimaryLabel from './PrimaryLabel'

export interface SubjectsRowProps {
  subjects: Subject[]
}

const SubjectsRow: React.FC<SubjectsRowProps> = (props) => {
  return (
    <Row style={{ marginTop: 6 }}>
      {props.subjects.map((value, index) => {
        if (props.subjects[index + 1]) {
          return (
            <Fragment key={value.id}>
              <PrimaryLabel>{value.name.toUpperCase()}</PrimaryLabel>
              <HorizontalDivider width={4} />
            </Fragment>
          )
        }

        return (
          <PrimaryLabel key={value.id}>{value.name.toUpperCase()}</PrimaryLabel>
        )
      })}
    </Row>
  )
}

export default SubjectsRow
