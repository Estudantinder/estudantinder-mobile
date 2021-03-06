import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

import * as ExpoImagePicker from 'expo-image-picker'

import PhotosCarrousel from 'packages/components/PhotosCarousel'
import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { Row, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'

import { useEditAuthUserContext } from '../context'
import EditPhotosUseCase from '../use-cases/edit-photos'
import EditUserPhotosDeleteStack from '../utils/EditUserPhotosDeleteStack'

const EditAuthUserPhotos: React.FC = () => {
  const context = useEditAuthUserContext()

  const stack = new EditUserPhotosDeleteStack()

  const getInitialState = () => {
    if (!context.photos?.photos) return ['']

    const initialPhotos = context.photos.photos.filter((value) => !!value)

    if (initialPhotos.length < 6) return [...initialPhotos, '']

    return initialPhotos
  }

  const getNewPhotos = (photos: string[]) => {
    const newPhotos: Array<{ index: number; uri: string }> = []

    photos.forEach((value, index) => {
      const oldPhoto = context.photos.photos[index]

      if (oldPhoto === value) return

      newPhotos.push({ index, uri: value })
    })

    return newPhotos
  }

  const [items, setItems] = useState(getInitialState())

  const router = useNavigation()

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

    const newItems = items.map((value, i) => {
      if (i === index) return uri

      return value
    })

    if (newItems.length >= 6) {
      return setItems(newItems)
    }

    if (newItems[newItems.length - 1] === '') newItems.pop()

    setItems([...newItems, ''])
  }

  async function handleSubmit() {
    try {
      setError(undefined)

      const formattedPhotos = items.filter((value) => value !== '')

      if (!formattedPhotos.length) {
        return setError('Selecione ao menos uma foto')
      }

      if (formattedPhotos === context.photos.photos) {
        return router.goBack()
      }

      await stack.resolveAll()

      const justNewPhotos = getNewPhotos(formattedPhotos)

      await EditPhotosUseCase(justNewPhotos)

      context.updateUser({ photos: formattedPhotos })

      router.goBack()
    } catch (error) {
      return alert(error)
    }
  }

  const handleDeletePhoto = (index: number) => {
    const newPhotos = items.filter((_, i) => i !== index)

    setItems([...newPhotos])

    stack.addDeletePhoto(index)
  }

  return (
    <StackPageTemplate title="Suas Fotos">
      <Subtitle style={{ color: error ? theme.colors.input.error : '#000' }}>
        {error || 'Escolha uma ou até seis fotos para o seu perfil'}
      </Subtitle>

      <View style={{ flex: 1, marginVertical: 32 }}>
        <PhotosCarrousel
          photos={items}
          onPress={handleSelectPicker}
          onDeletePress={handleDeletePhoto}
        />
      </View>

      <View style={{ flex: 1, marginVertical: 32 }}>
        <PhotosCarrousel
          photos={items}
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
