import { useNavigation } from '@react-navigation/native'
import React from 'react'

import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { useMainContext } from 'packages/main/context'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import ShowStudent from 'packages/show-student-info'
import { Row, Subtitle } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'

import { useEditAuthUserContext } from '../context'
import EditPhotosUseCase from '../use-cases/edit-photos'

const EditAuthUserProfile: React.FC = () => {
  const editAuthUserContext = useEditAuthUserContext()
  const mainContext = useMainContext()

  const router = useNavigation()

  const user = editAuthUserContext.getUser()

  if (!user) {
    return (
      <StackPageTemplate title="Algo deu errado">
        <Subtitle>
          Confirme se você preencheu todas as informações no cadastro
        </Subtitle>
      </StackPageTemplate>
    )
  }

  const handleEditUser = async () => {
    try {
      await editAuthUserContext.editUser()
    } catch (error) {
      return alertModal(error)
    }

    if (editAuthUserContext.photos.newPhotos) {
      try {
        await EditPhotosUseCase(editAuthUserContext.photos.newPhotos)
      } catch (error) {
        return alertModal(error)
      }
    }

    mainContext.setProfile(user)

    return router.reset({
      index: 0,
      routes: [{ name: AUTHENTICATED_ROUTES.MAIN }],
    })
  }

  return (
    <StackPageTemplate title="Seu perfil ficará assim" withoutPadding>
      <ShowStudent student={user}>
        <Row style={{ padding: 16 }}>
          <PrimaryButton onPress={handleEditUser}>CADASTRAR</PrimaryButton>
        </Row>
      </ShowStudent>
    </StackPageTemplate>
  )
}

export default EditAuthUserProfile
