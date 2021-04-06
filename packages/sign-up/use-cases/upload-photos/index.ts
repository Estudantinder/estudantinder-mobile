import api from 'packages/api'
import ApiError from 'packages/api/ApiError'

export default async function UploadPhotosUseCase(photos: Array<string>) {
  const data = new FormData()

  photos.forEach((value, index) => {
    data.append(`photo${index}`, {
      type: 'image/jpeg',
      uri: value,
      name: `image_${index}.jpg`,
    } as never)
  })

  try {
    await api.post('/users/imageUpload', data)
  } catch (error) {
    if (error.response) {
      throw new ApiError(error.response)
    }

    throw error
  }
}
