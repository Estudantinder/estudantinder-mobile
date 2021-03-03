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
      name: `image_${value.index}.png`,
    } as never)
  })

  try {
    await api.post('/users/imageUpload', data)
  } catch (error) {
    if (error.response) {
      throw new ApiError({
        title: error.response.data.error || 'ALGO DEU ERRADO!',
        message:
          error.response.data.message ||
          String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
