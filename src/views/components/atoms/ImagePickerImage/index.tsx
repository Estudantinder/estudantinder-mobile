import React from 'react'

import Styled from './styles'

export interface ImagePickerImageProps {
  image?: string
  onDeleteImage(): void
}

const ImagePickerImage: React.FC<ImagePickerImageProps> = (props) => {
  return (
    <Styled.Container>
      <Styled.Image source={{ uri: props.image }} />

      <Styled.Button onPress={props.onDeleteImage}>
        <Styled.ButtonIcon />
      </Styled.Button>
    </Styled.Container>
  )
}

export default ImagePickerImage
