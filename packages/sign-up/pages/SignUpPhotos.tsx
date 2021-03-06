import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

import * as ExpoImagePicker from 'expo-image-picker'

import PhotosCarrousel from 'packages/components/PhotosCarousel'
import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { Row, Subtitle } from 'packages/styles'
import theme from 'packages/styles/theme'

import { useSignUpContext } from '../context'

const SignUpPhotos: React.FC = () => {
  const context = useSignUpContext()

  const getInitialState = () => {
    if (!context.photos?.photos) return ['']

    const initialPhotos = context.photos.photos.filter((value) => !!value)

    if (initialPhotos.length < 6) return [...initialPhotos, '']

    return initialPhotos
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

      context.setPhotos({ photos: formattedPhotos })

      router.navigate(SIGNUP_ROUTES.PROFILE)
    } catch (error) {
      return alert(error)
    }
  }

  const handleDeletePhoto = (index: number) => {
    const newPhotos = items.filter((_, i) => i !== index)

    setItems([...newPhotos])
  }

  return (
    <StackPageTemplate title="Suas Fotos" withoutPadding>
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

      <Row style={{ paddingHorizontal: 16 }}>
        <PrimaryButton onPress={handleSubmit}>CONTINUAR</PrimaryButton>
      </Row>
    </StackPageTemplate>
  )
}

export default SignUpPhotos
