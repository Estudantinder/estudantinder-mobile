import React from 'react'

import DetailsStyled from '../../styles/pages/sign-up/Details.styled'

const Details: React.FC = () => {
  return (
    <DetailsStyled.Container>
      <DetailsStyled.Header>
        <DetailsStyled.Title>Um pouco sobre você</DetailsStyled.Title>
      </DetailsStyled.Header>

      <DetailsStyled.Main>
        <DetailsStyled.Input placeholder="Descrição" />
        <DetailsStyled.Input placeholder="Matéria 1" />
        <DetailsStyled.Input placeholder="Matéria 2" />
        <DetailsStyled.Input placeholder="Matéria 3" />
      </DetailsStyled.Main>

      <DetailsStyled.Footer>
        <DetailsStyled.Button>
          <DetailsStyled.ButtonText>Continuar</DetailsStyled.ButtonText>
        </DetailsStyled.Button>
      </DetailsStyled.Footer>
    </DetailsStyled.Container>
  )
}

export default Details
