import axios from 'axios'

import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export type EditPhotosUseCasePhotos = Array<{
  index: number
  uri: string
}>

export default async function EditPhotosUseCase(
  photos: EditPhotosUseCasePhotos
) {
  const data = new FormData()

  photos.forEach((value) => {
    data.append(`photo${value.index}`, {
      type: 'image/jpeg',
      uri: value.uri,
      name: `image_${value.index}.jpg`,
    } as never)
  })

  try {
    await api.post('/users/me/images', data)
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        throw new ApiError(error.response)
      }
    }

    throw error
  }
}
