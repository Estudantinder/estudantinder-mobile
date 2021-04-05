import React from 'react'

import { Feather } from '@expo/vector-icons'

import PhotosCarrousel from 'packages/image-library/components/PhotosCarousel'
import theme from 'packages/styles/theme'

import {
  ShowStudentImage,
  ShowStudentImageContainer,
  ShowStudentInfoContainer,
  ShowStudentInfoHeader,
  ShowStudentInfoLabel,
} from '../show-student-info.styles'

export interface ShowStudentPhotos {
  photos: Array<string>
}

const ShowStudentPhotos: React.FC<ShowStudentPhotos> = (props) => {
  const photos = props.photos ? props.photos.filter((value) => !!value) : []

  return (
    <ShowStudentInfoContainer>
      <ShowStudentInfoHeader style={{ paddingHorizontal: 16 }}>
        <Feather
          name="image"
          color={theme.colors.secondary.dark_purple}
          size={20}
        />
        <ShowStudentInfoLabel>Fotos</ShowStudentInfoLabel>
      </ShowStudentInfoHeader>

      <ShowStudentImageContainer>
        <PhotosCarrousel
          photos={photos}
          renderItem={({ item }) => {
            return (
              <ShowStudentImage resizeMode="cover" source={{ uri: item }} />
            )
          }}
        />
      </ShowStudentImageContainer>
    </ShowStudentInfoContainer>
  )
}

export default ShowStudentPhotos
