import React, { useState } from 'react'

import * as ExpoImagePicker from 'expo-image-picker'

import ImagePicker from 'src/views/components/molecules/ImagePicker'

import Styled from './styles'

const SignUpImages: React.FC = () => {
  const [images, setImages] = useState<string[]>([])

  async function handleSelectPicker() {
    const status = await ExpoImagePicker.requestCameraRollPermissionsAsync()

    if (!status.granted) {
      alert('Precisamos das suas fotos')
      return
    }

    const result = await ExpoImagePicker.launchImageLibraryAsync({
      quality: 1,
      mediaTypes: ExpoImagePicker.MediaTypeOptions.Images,
    })

    if (result.cancelled) return

    const { uri } = result

    setImages([...images, uri])
  }

  async function handleDeleteImage(index: number) {
    const newImages = images.filter((_, i) => i !== index)

    setImages(newImages)
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <ImagePicker
          image={images[0]}
          onSelectImage={handleSelectPicker}
          onDeleteImage={() => handleDeleteImage(0)}
        />
      </Styled.Header>

      <Styled.Main>
        <Styled.Row>
          <ImagePicker
            image={images[1]}
            onSelectImage={handleSelectPicker}
            onDeleteImage={() => handleDeleteImage(1)}
          />
          <ImagePicker
            image={images[2]}
            onSelectImage={handleSelectPicker}
            onDeleteImage={() => handleDeleteImage(2)}
          />
          <ImagePicker
            image={images[3]}
            onSelectImage={handleSelectPicker}
            onDeleteImage={() => handleDeleteImage(3)}
          />
        </Styled.Row>

        <Styled.Row>
          <ImagePicker
            image={images[4]}
            onSelectImage={handleSelectPicker}
            onDeleteImage={() => handleDeleteImage(4)}
          />
          <ImagePicker
            image={images[5]}
            onSelectImage={handleSelectPicker}
            onDeleteImage={() => handleDeleteImage(5)}
          />

          <Styled.BlankImage />
        </Styled.Row>
      </Styled.Main>
    </Styled.Container>
  )
}

export default SignUpImages
