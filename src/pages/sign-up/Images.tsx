import React, { useState } from 'react'
import { Image } from 'react-native'

import * as ImagePicker from 'expo-image-picker'

import { useSignUpContext } from 'src/context/sign-up'
import ImagesStyled from 'src/styles/pages/sign-up/Images.styled'

const Images: React.FC = () => {
  const { getUser } = useSignUpContext()
  const [images, setImages] = useState<string[]>([])

  function handleSubmit() {
    console.log(getUser())
  }

  async function handleSelectPicker() {
    const status = await ImagePicker.requestCameraRollPermissionsAsync()

    if (!status.granted) {
      alert('Precisamos das suas fotos')
      return
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) return

    const { uri } = result

    setImages([...images, uri])
  }

  return (
    <ImagesStyled.Container>
      <ImagesStyled.Header>
        <ImagesStyled.Title>Suas Fotos</ImagesStyled.Title>

        <ImagesStyled.ProfilePicture>
          {images[0] ? (
            <Image
              source={{ uri: images[0] }}
              style={{ width: 75, height: 75 }}
            />
          ) : (
            <ImagesStyled.ProfilePictureImage onPress={handleSelectPicker} />
          )}
          <ImagesStyled.ProfilePictureText>
            Adicione suas fotos
          </ImagesStyled.ProfilePictureText>
        </ImagesStyled.ProfilePicture>
      </ImagesStyled.Header>

      <ImagesStyled.Main>
        <ImagesStyled.CardContainer>
          <ImagesStyled.Row>
            <ImagesStyled.Card onPress={handleSelectPicker} />
            <ImagesStyled.Card onPress={handleSelectPicker} />
            <ImagesStyled.Card onPress={handleSelectPicker} />
          </ImagesStyled.Row>
          <ImagesStyled.Row>
            <ImagesStyled.Card onPress={handleSelectPicker} />
            <ImagesStyled.Card onPress={handleSelectPicker} />
            <ImagesStyled.Card onPress={handleSelectPicker} />
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
