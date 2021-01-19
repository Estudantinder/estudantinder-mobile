import React from 'react'

import { FontAwesome } from '@expo/vector-icons'

import Student from 'main/entities/Student'

import PrimaryLabel from 'views/components/atoms/PrimaryLabel'
import { HorizontalDivider, Row } from 'views/styles/globalStyles'

import Styled from './styles'

export interface CardProps {
  student: Student
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <Styled.Container>
      <Styled.Image />

      <Styled.Footer>
        <Row>
          <Styled.NameText>{props.student.name}, 16</Styled.NameText>

          <FontAwesome name="user-circle" color="#a8a8a8" size={24} />
        </Row>

        <Styled.FooterText>ITB Belval - Informática</Styled.FooterText>
        <Styled.FooterText>2º ano F Manhã</Styled.FooterText>

        <Row style={{ marginTop: 12 }}>
          <PrimaryLabel>ARTES</PrimaryLabel>

          <HorizontalDivider />

          <PrimaryLabel>FÍSICA</PrimaryLabel>

          <HorizontalDivider />

          <PrimaryLabel>INGLÊS</PrimaryLabel>
        </Row>
      </Styled.Footer>
    </Styled.Container>
  )
}

export default Card
