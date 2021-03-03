import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function UploadPhotosUseCase(photos: Array<string>) {
  const data = new FormData()

  photos.forEach((value, index) => {
    data.append(`photo${index}`, {
      type: 'image/jpeg',
      uri: value,
      name: `image_${index}.png`,
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
