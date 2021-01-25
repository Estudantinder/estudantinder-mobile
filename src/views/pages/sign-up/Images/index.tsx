import { useNavigation } from '@react-navigation/native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel'

import * as ExpoImagePicker from 'expo-image-picker'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'
import validateSchema from 'main/validation'
import { StudentPhotosSchema } from 'main/validation/schemas/StudentSchemas'

import InputInfo from 'views/components/atoms/InputInfo'
import PrimaryButton from 'views/components/atoms/PrimaryButton'
import ImagePickerCard from 'views/components/molecules/ImagePickerCard'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { InputLabel } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import FormattedValidationError from 'shared/FormattedValidationError'

const SignUpImages: React.FC = () => {
  const { photos, setPhotos, createUser, getUser } = useSignUpContext()
  const { signIn } = useAuthContext()

  const [activeIndex, setActiveIndex] = useState(0)

  const [images, setImages] = useState(photos?.photos || [''])

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

    if (images.length >= 5) {
      const newImages = images.map((value, i) => {
        if (i === index) return uri

        return value
      })

      return setImages(newImages)
    }

    const newImages = images

    newImages.pop()

    setImages([...newImages, uri, ''])
  }

  async function handlePressSubmit() {
    try {
      await createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    try {
      const user = getUser()

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

  async function handleSetPhotos() {
    try {
      setError(undefined)

      const validatedData = await validateSchema(StudentPhotosSchema, {
        photos: images,
      })

      const formattedPhotos = validatedData.photos.filter(
        (value) => value !== ''
      )

      setPhotos({ ...validatedData, photos: formattedPhotos })
    } catch (error) {
      if (error instanceof FormattedValidationError) {
        console.log(error.validationErrors)

        return setError('Selecione ao menos uma foto')
      }

      return alert(error)
    }
  }

  return (
    <FormPageTemplate title="Imagens">
      <InputLabel>{String(JSON.stringify(getUser(), undefined, 1))}</InputLabel>

      <Carousel
        data={images}
        renderItem={({ item, index }: { item: string; index: number }) => {
          return (
            <ImagePickerCard
              imageUri={item}
              onPress={() => handleSelectPicker(index)}
            />
          )
        }}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={210}
        onSnapToItem={(index) => setActiveIndex(index)}
      />

      <Pagination
        dotsLength={images.length}
        activeDotIndex={activeIndex}
        dotStyle={{ width: 30, height: 4, marginHorizontal: -6 }}
        inactiveDotColor="#B3B3B3"
        dotColor="#666"
        animatedDuration={150}
        animatedFriction={10}
        animatedTension={10}
        inactiveDotScale={0.8}
      />

      <InputInfo>{error}</InputInfo>

      <PrimaryButton
        style={{ marginTop: images.length > 1 ? 0 : 40 }}
        onPress={handleSetPhotos}
      >
        SET PHOTOS
      </PrimaryButton>

      <PrimaryButton style={{ marginTop: 12 }} onPress={handlePressSubmit}>
        CADASTRAR
      </PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpImages
