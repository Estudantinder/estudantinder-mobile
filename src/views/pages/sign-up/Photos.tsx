import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import * as ExpoImagePicker from 'expo-image-picker'

import { useSignUpContext } from 'main/context/sign-up'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import PhotosCarrousel from 'views/components/organisms/PhotosCarrousel'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { Subtitle } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

const SignUpPhotos: React.FC = () => {
  const context = useSignUpContext()

  const getInitialState = () => {
    if (!context.photos?.photos) return ['']

    if (context.photos.photos.length < 6) return [...context.photos.photos, '']

    return context.photos.photos
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

      router.navigate('Profile')
    } catch (error) {
      return alert(error)
    }
  }

  const handleDeletePhoto = (index: number) => {
    const newPhotos = items.filter((_, i) => i !== index)

    setItems([...newPhotos])
  }

  return (
    <FormPageTemplate title="Suas Fotos">
      <Subtitle style={{ color: error ? theme.colors.input.error : '#000' }}>
        {error || 'Escolha uma ou até seis fotos para o seu perfil'}
      </Subtitle>

      <PhotosCarrousel
        photos={items}
        onPress={handleSelectPicker}
        onDeletePress={handleDeletePhoto}
      />

      <PrimaryButton onPress={handleSubmit}>CONTINUAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpPhotos
