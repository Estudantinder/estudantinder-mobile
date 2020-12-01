import React from 'react'

import { useSignUpContext } from 'src/context/sign-up'
import ImagesStyled from 'src/styles/pages/sign-up/Images.styled'

const Images: React.FC = () => {
  const { getUser } = useSignUpContext()

  function handleSubmit() {
    console.log(getUser())
  }

  return (
    <ImagesStyled.Container>
      <ImagesStyled.Header>
        <ImagesStyled.Title>Suas Fotos</ImagesStyled.Title>

        <ImagesStyled.ProfilePicture>
          <ImagesStyled.ProfilePictureImage />
          <ImagesStyled.ProfilePictureText>
            Adicione suas fotos
          </ImagesStyled.ProfilePictureText>
        </ImagesStyled.ProfilePicture>
      </ImagesStyled.Header>

      <ImagesStyled.Main>
        <ImagesStyled.CardContainer>
          <ImagesStyled.Row>
            <ImagesStyled.Card />
            <ImagesStyled.Card />
            <ImagesStyled.Card />
          </ImagesStyled.Row>
          <ImagesStyled.Row>
            <ImagesStyled.Card />
            <ImagesStyled.Card />
            <ImagesStyled.Card />
          </ImagesStyled.Row>
        </ImagesStyled.CardContainer>
      </ImagesStyled.Main>

      <ImagesStyled.Footer>
        <ImagesStyled.Button onPress={handleSubmit}>
          <ImagesStyled.ButtonText>Continuar</ImagesStyled.ButtonText>
        </ImagesStyled.Button>
      </ImagesStyled.Footer>
    </ImagesStyled.Container>
  )
}

export default Images
