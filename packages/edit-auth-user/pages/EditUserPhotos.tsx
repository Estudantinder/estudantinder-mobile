import { useNavigation } from '@react-navigation/native'
import React from 'react'

import EditStudentPhotos from 'packages/edit-student-info/pages/Photos'
import { StudentPhotos } from 'packages/entities/Student'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'

import { useEditAuthUserContext } from '../context'
import DeletePhotoUseCase from '../use-cases/delete-photo'
import { EditPhotosUseCasePhotos } from '../use-cases/edit-photos'

const EditAuthUserPhotos: React.FC = () => {
  const context = useEditAuthUserContext()

  const router = useNavigation()

  const onSubmitSuccess = (data: StudentPhotos) => {
    const newPhotos: EditPhotosUseCasePhotos = []

    data.photos.forEach((value, index) => {
      const oldPhoto = context.photos.photos[index]

      if (oldPhoto === value) return

      newPhotos.push({ index, uri: value })
    })

    context.setPhotos({ ...data, newPhotos })

    router.navigate(EDIT_AUTH_USER_ROUTES.PROFILE)
  }

  const deletePhoto = async (index: number) => {
    const newPhotos = context.photos.photos.filter((_, i) => i !== index)

    await DeletePhotoUseCase(index)

    context.setPhotos({ photos: newPhotos })

    return true
  }

  return (
    <EditStudentPhotos
      onSubmitSuccess={onSubmitSuccess}
      initialData={context.photos}
      onDeletePhoto={deletePhoto}
    />
  )
}

export default EditAuthUserPhotos
