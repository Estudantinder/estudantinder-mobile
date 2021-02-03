import api from 'main/api'
import ApiError from 'main/utils/ApiError'
import { IApiReturnError } from 'main/utils/interfaces'

export default async function uploadPhotos(photos: Array<string>) {
  const data = new FormData()

  photos.forEach((value, index) => {
    data.append(`photo${index}`, {
      type: 'image/jpeg',
      uri: value,
      name: `image_${index}.  `,
    } as never)
  })

  try {
    await api.post('/users/imageUpload', data)
  } catch (error) {
    if (error.response) {
      const { error: title, message } = error.response.data as IApiReturnError

      throw new ApiError({
        title: title || 'ALGO DEU ERRADO!',
        message: message || String(JSON.stringify(error.response.data)),
      })
    }

    throw error
  }
}
