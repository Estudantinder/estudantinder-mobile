import React from 'react'

import { Feather } from '@expo/vector-icons'

import PhotosCarrousel from 'packages/student-info/edit-target-info/components/PhotosCarousel'
import theme from 'packages/styles/theme'

import {
  ShowTargetStudentImage,
  ShowTargetStudentImageContainer,
  ShowTargetStudentInfoContainer,
  ShowTargetStudentInfoHeader,
  ShowTargetStudentInfoLabel,
} from '../show-target-info.styles'

export interface ShowTargetStudentPhotos {
  photos: Array<string>
}

const ShowTargetStudentPhotos: React.FC<ShowTargetStudentPhotos> = (props) => {
  return (
    <ShowTargetStudentInfoContainer>
      <ShowTargetStudentInfoHeader style={{ paddingHorizontal: 16 }}>
        <Feather
          name="image"
          color={theme.colors.secondary.dark_purple}
          size={20}
        />
        <ShowTargetStudentInfoLabel>Fotos</ShowTargetStudentInfoLabel>
      </ShowTargetStudentInfoHeader>

      <ShowTargetStudentImageContainer>
        <PhotosCarrousel
          photos={props.photos || []}
          renderItem={({ item }) => {
            return (
              <ShowTargetStudentImage
                resizeMode="cover"
                source={{ uri: item }}
              />
            )
          }}
        />
      </ShowTargetStudentImageContainer>
    </ShowTargetStudentInfoContainer>
  )
}

export default ShowTargetStudentPhotos
