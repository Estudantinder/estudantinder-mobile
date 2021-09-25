import { useState } from 'react'

import * as ImagePicker from 'expo-image-picker'

const MAX_IMAGES = 6

export default function useImageLibrary(initialPhotos?: string[]) {
  const initialState = getInitialState(initialPhotos)

  const [images, setImages] = useState(initialState)

  const handleSelectPicker = async (index: number) => {
    const uri = await getImageFromLibrary()

    if (!uri) return

    const newImages = images.map((value, i) => {
      if (i === index) return uri

      return value
    })

    if (newImages.length >= MAX_IMAGES) {
      return setImages(newImages)
    }

    if (newImages[newImages.length - 1] === '') newImages.pop()

    setImages([...newImages, ''])
  }

  return { images, setImages, handleSelectPicker }
}

function getInitialState(initialPhotos?: string[]) {
  if (!initialPhotos) return ['']

  const initialState = initialPhotos.filter((value) => !!value)

  if (initialState.length < MAX_IMAGES) return [...initialState, '']

  return initialState
}

async function getImageFromLibrary(): Promise<string | undefined> {
  const isAvailable = await getImagePermission()

  if (!isAvailable) return undefined

  return getImage()
}

async function getImagePermission() {
  const status = await ImagePicker.requestMediaLibraryPermissionsAsync()

  if (!status.granted) {
    alert('Precisamos das suas fotos')
    return false
  }

  return true
}

async function getImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    quality: 1,
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  })

  if (result.cancelled) return undefined

  return result.uri
}
