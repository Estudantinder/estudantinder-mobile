import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { View } from 'react-native'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import PhotosCarrousel from 'packages/image-library/components/PhotosCarousel'
import useImageLibrary from 'packages/image-library/useImageLibrary'
import { SIGNUP_ROUTES } from 'packages/router/constants'
import { Row, Subtitle } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import { useSignUpContext } from '../context'

const SignUpPhotos: React.FC = () => {
  const context = useSignUpContext()

  const { theme } = useToggleThemeContext()

  const { handleSelectPicker, images, setImages } = useImageLibrary(
    context.photos?.photos
  )

  const router = useNavigation()

  const [error, setError] = useState<string>()

  async function handleSubmit() {
    try {
      setError(undefined)

      const formattedPhotos = images.filter((value) => value !== '')

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
    const newPhotos = images.filter((_, i) => i !== index)

    setImages([...newPhotos])
  }

  return (
    <StackPageTemplate title="Suas Fotos" withoutPadding>
      <Subtitle style={{ color: error ? theme.input.error : '#000' }}>
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
        <PrimaryButton onPress={handleSubmit}>CONTINUAR</PrimaryButton>
      </Row>
    </StackPageTemplate>
  )
}

export default SignUpPhotos
