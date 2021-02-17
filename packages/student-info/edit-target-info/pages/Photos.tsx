import React, { useState } from 'react'

import * as ExpoImagePicker from 'expo-image-picker'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { StudentPhotos } from 'packages/entities/Student'
import { Row, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'
import alertModal from 'packages/utils/alertModal'

import PhotosCarrousel from '../components/PhotosCarousel'
import { PhotosCarrouselContainer } from '../edit-target-info.styles'

export interface EditStudentPhotosProps {
  onSubmitSuccess(photos: StudentPhotos): void
  initialData?: StudentPhotos
}

const EditStudentPhotos: React.FC<EditStudentPhotosProps> = (props) => {
  const getInitialState = (): Array<string> => {
    if (!props.initialData?.photos) return ['']

    if (props.initialData.photos.length < 6)
      return [...props.initialData.photos, '']

    return props.initialData.photos
  }

  const [photos, setPhotos] = useState(getInitialState())

  const [error, setError] = useState<string>()

  async function handleSelectPicker(index: number) {
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

    const newPhotos = photos.map((value, i) => {
      if (i === index) return uri

      return value
    })

    if (newPhotos.length >= 6) {
      return setPhotos(newPhotos)
    }

    if (newPhotos[newPhotos.length - 1] === '') newPhotos.pop()

    setPhotos([...newPhotos, ''])
  }

  async function handleSubmit() {
    try {
      setError(undefined)

      const formattedPhotos = photos.filter((value) => value !== '')

      if (!formattedPhotos.length) {
        return setError('Selecione ao menos uma foto')
      }

      props.onSubmitSuccess({ photos: formattedPhotos })
    } catch (error) {
      return alertModal(error)
    }
  }

  const handleDeletePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index)

    setPhotos([...newPhotos])
  }

  return (
    <StackPageTemplate title="Suas Fotos" withoutPadding>
      <Subtitle style={{ color: error ? theme.colors.input.error : '#000' }}>
        {error || 'Escolha uma ou até seis fotos para o seu perfil'}
      </Subtitle>

      <PhotosCarrouselContainer>
        <PhotosCarrousel
          photos={photos}
          onPress={handleSelectPicker}
          onDeletePress={handleDeletePhoto}
        />
      </PhotosCarrouselContainer>

      <Row style={{ paddingHorizontal: 16 }}>
        <PrimaryButton testID="submit-button" onPress={handleSubmit}>
          CONTINUAR
        </PrimaryButton>
      </Row>
    </StackPageTemplate>
  )
}

export default EditStudentPhotos
