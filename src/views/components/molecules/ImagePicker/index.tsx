import React from 'react'

import ImagePickerButton from 'views/components/atoms/ImagePickerButton'
import ImagePickerImage, {
  ImagePickerImageProps,
} from 'views/components/atoms/ImagePickerImage'

import Styled from './styles'

export interface ImagePickerProps extends ImagePickerImageProps {
  image?: string
  onSelectImage(): void
}

const ImagePicker: React.FC<ImagePickerProps> = (props) => {
  return (
    <Styled.Container>
      {props.image ? (
        <ImagePickerImage
          image={props.image}
          onDeleteImage={props.onDeleteImage}
        />
      ) : (
        <ImagePickerButton onSelectImage={props.onSelectImage} />
      )}
    </Styled.Container>
  )
}

export default ImagePicker
