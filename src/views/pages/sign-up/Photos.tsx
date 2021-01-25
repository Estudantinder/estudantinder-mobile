import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'

import * as ExpoImagePicker from 'expo-image-picker'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import PhotosCarrousel from 'views/components/organisms/PhotosCarrousel'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { InputLabel } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const SignUpPhotos: React.FC = () => {
  const context = useSignUpContext()
  const { signIn } = useAuthContext()

  const [items, setItems] = useState(
    context.photos?.photos ? [...context.photos?.photos, ''] : ['']
  )

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
        return setError('Selecione ao menos uma foto! ')
      }

      context.setPhotos({ photos: formattedPhotos })
    } catch (error) {
      return alert(error)
    }

    await handleSignUp()
  }

  async function handleSignUp() {
    try {
      await context.createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    await handleSignIn()
  }

  async function handleSignIn() {
    try {
      const user = context.getUser()

      if (!user) return router.navigate('Login')

      await signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })

      return router.navigate('Home')
    } catch (error) {
      triggerCorrectAlert(error)

      return router.navigate('Login')
    }
  }

  return (
    <FormPageTemplate title="Suas Fotos">
      <InputLabel
        style={{ color: error ? theme.colors.input.invalid : '#000' }}
      >
        {error || 'Escolha até seis fotos para o seu perfil'}
      </InputLabel>

      <PhotosCarrousel onSelect={handleSelectPicker} photos={items} />

      <PrimaryButton onPress={handleSubmit}>CADASTRAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpPhotos
