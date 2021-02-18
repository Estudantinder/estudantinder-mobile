import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useAuthContext } from 'packages/auth/context'
import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { UNAUTHENTICATED_ROUTES } from 'packages/router/constants'
import ShowTargetStudent from 'packages/student-info/show-target-info/ShowTargetInfo'
import { Row, Subtitle } from 'packages/styles'
import alertModal from 'packages/utils/alertModal'

import { useSignUpContext } from '../context'
import UploadPhotosUseCase from '../use-cases/upload-photos'

const SignUpProfile: React.FC = () => {
  const signUpContext = useSignUpContext()
  const authContext = useAuthContext()

  const user = signUpContext.getUser()

  const router = useNavigation()

  if (!user) {
    return (
      <StackPageTemplate title="Algo deu errado">
        <Subtitle>
          Confirme se você preencheu todas as informações no cadastro
        </Subtitle>
      </StackPageTemplate>
    )
  }

  const handleSignUp = async () => {
    try {
      await signUpContext.createUser()
    } catch (error) {
      return alertModal(error)
    }

    await handleSignIn()
  }

  const handleSignIn = async () => {
    try {
      await authContext.signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })

      return handleUploadPhotos()
    } catch (error) {
      alertModal(error)

      return router.reset({
        index: 0,
        routes: [{ name: UNAUTHENTICATED_ROUTES.LOGIN }],
      })
    }
  }

  const handleUploadPhotos = async () => {
    try {
      await UploadPhotosUseCase(user.photos)
    } catch (error) {
      return alertModal(error)
    }
  }

  return (
    <StackPageTemplate title="Seu perfil ficará assim" withoutPadding>
      <ShowTargetStudent student={user}>
        <Row style={{ padding: 16 }}>
          <PrimaryButton onPress={handleSignUp}>CADASTRAR</PrimaryButton>
        </Row>
      </ShowTargetStudent>
    </StackPageTemplate>
  )
}

export default SignUpProfile
