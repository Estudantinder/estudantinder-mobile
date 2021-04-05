import { useNavigation } from '@react-navigation/native'
import React, { useMemo, useState } from 'react'
import { View } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import PhotosCarrousel from 'packages/image-library/components/PhotosCarousel'
import useImageLibrary from 'packages/image-library/handleSelectPicker'
import { Row, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'

import { useEditAuthUserContext } from '../context'
import EditPhotosUseCase from '../use-cases/edit-photos'
import EditUserPhotosDeleteStack from '../utils/EditUserPhotosDeleteStack'

const EditAuthUserPhotos: React.FC = () => {
  const context = useEditAuthUserContext()

  const stack = useMemo(() => new EditUserPhotosDeleteStack(), [])

  const { handleSelectPicker, images, setImages } = useImageLibrary(
    context.photos.photos
  )

  const getNewPhotos = (photos: string[]) => {
    const newPhotos: Array<{ index: number; uri: string }> = []

    photos.forEach((value, index) => {
      const oldPhoto = context.photos.photos[index]

      if (oldPhoto === value) return
      if (value.startsWith('http')) return

      newPhotos.push({ index, uri: value })
    })

    return newPhotos
  }

  const router = useNavigation()

  const [error, setError] = useState<string>()

  async function handleSubmit() {
    try {
      setError(undefined)

      const formattedPhotos = images.filter((value) => value !== '')

      if (!formattedPhotos.length) {
        return setError('Selecione ao menos uma foto')
      }

      if (formattedPhotos === context.photos.photos) {
        return router.goBack()
      }

      await stack.resolveAll()

      const justNewPhotos = getNewPhotos(formattedPhotos)

      if (!justNewPhotos) return

      await EditPhotosUseCase(justNewPhotos)

      context.updateUser({ photos: formattedPhotos })

      router.goBack()
    } catch (error) {
      return alert(error)
    }
  }

  const handleDeletePhoto = (index: number) => {
    const newPhotos = images.filter((_, i) => i !== index)

    setImages([...newPhotos])

    if (images[index].startsWith('http')) stack.addDeletePhoto(index)
  }

  return (
    <StackPageTemplate title="Suas Fotos" withoutPadding>
      <Subtitle style={{ color: error ? theme.colors.input.error : '#000' }}>
        {error || 'Escolha uma ou até seis fotos para o seu perfil'}
      </Subtitle>

      <View style={{ flex: 1, marginVertical: 32 }}>
        <PhotosCarrousel
          photos={images}
          onPress={handleSelectPicker}
          onDeletePress={handleDeletePhoto}
        />
      </View>

      <Row style={{ paddingHorizontal: 16 }}>
        <PrimaryButton onPress={handleSubmit}>EDITAR FOTOS</PrimaryButton>
      </Row>
    </StackPageTemplate>
  )
}

export default EditAuthUserPhotos
