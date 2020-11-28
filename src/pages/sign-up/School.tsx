import React from 'react'

import SchoolStyled from '../../styles/pages/sign-up/School.styled'

const School: React.FC = () => {
  return (
    <SchoolStyled.Container>
      <SchoolStyled.Header>
        <SchoolStyled.Title>Informações escolares</SchoolStyled.Title>
      </SchoolStyled.Header>

      <SchoolStyled.Main>
        <SchoolStyled.Input placeholder="Escola" />
        <SchoolStyled.Input placeholder="Curso" />
        <SchoolStyled.Input placeholder="Série" />
        <SchoolStyled.Input placeholder="Turno" />
        <SchoolStyled.Input placeholder="Sala" />
      </SchoolStyled.Main>

      <SchoolStyled.Footer>
        <SchoolStyled.Button>
          <SchoolStyled.ButtonText>Continuar</SchoolStyled.ButtonText>
        </SchoolStyled.Button>
      </SchoolStyled.Footer>
    </SchoolStyled.Container>
  )
}

export default School
