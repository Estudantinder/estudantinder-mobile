import React from 'react'

import { Ionicons, Feather } from '@expo/vector-icons'

import { useToggleThemeContext } from 'packages/styles/context'

import {
  ImagePickerCardContainer,
  ImagePickerCardImage,
  ImagePickerCardDeleteContainer,
  ImagePickerCardDeleteButton,
} from '../image-library.styles'

export interface ImagePickerCardProps {
  imageUri: string
  onPress(): void
  onDeletePress(): void
}

const ImagePickerCard: React.FC<ImagePickerCardProps> = (props) => {
  const { theme } = useToggleThemeContext()

  return (
    <ImagePickerCardContainer onPress={props.onPress}>
      {props.imageUri ? (
        <ImagePickerCardImage source={{ uri: props.imageUri }} />
      ) : (
        <Ionicons name="ios-camera" size={36} color={theme.base.purple} />
      )}

      {props.imageUri ? (
        <ImagePickerCardDeleteContainer>
          <ImagePickerCardDeleteButton onPress={props.onDeletePress}>
            <Feather name="trash-2" color="#fff" size={16} />
          </ImagePickerCardDeleteButton>
        </ImagePickerCardDeleteContainer>
      ) : undefined}
    </ImagePickerCardContainer>
  )
}

export default ImagePickerCard
