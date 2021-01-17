import React from 'react'

export interface ImagePickerButton {
  onSelectImage(): void
}

import Styled from './styles'

const ImagePickerButton: React.FC<ImagePickerButton> = (props) => {
  return (
    <Styled.Button onPress={props.onSelectImage}>
      <Styled.ButtonText>Upload de imagem</Styled.ButtonText>
    </Styled.Button>
  )
}

export default ImagePickerButton
