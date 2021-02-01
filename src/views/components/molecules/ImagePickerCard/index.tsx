import React from 'react'

import { Ionicons, Feather } from '@expo/vector-icons'

import theme from 'views/styles/theme'

import Styled from './styles'

export interface ImagePickerCardProps {
  imageUri: string
  onPress(): void
  onDeletePress(): void
}

const ImagePickerCard: React.FC<ImagePickerCardProps> = (props) => {
  return (
    <Styled.Container onPress={props.onPress}>
      {props.imageUri ? (
        <Styled.Image source={{ uri: props.imageUri }} />
      ) : (
        <Ionicons
          name="ios-camera"
          size={36}
          color={theme.colors.primary.purple}
        />
      )}

      {props.imageUri ? (
        <Styled.DeleteContainer>
          <Styled.DeleteButton onPress={props.onDeletePress}>
            <Feather name="trash-2" color="#fff" size={16} />
          </Styled.DeleteButton>
        </Styled.DeleteContainer>
      ) : undefined}
    </Styled.Container>
  )
}

export default ImagePickerCard
