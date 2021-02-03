import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'
import uploadPhotos from 'main/use-cases/upload-photos'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import StudentInfo from 'views/components/templates/StudentInfo'
import { Subtitle } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const SignUpProfile: React.FC = () => {
  const { createUser, getUser } = useSignUpContext()

  const { signIn } = useAuthContext()

  const router = useNavigation()

  const user = getUser()

  if (!user)
    return (
      <FormPageTemplate title="Algo deu errado">
        <Subtitle>
          Confirme se você preencheu todas as informações no cadastro
        </Subtitle>
      </FormPageTemplate>
    )

  const handleSignUp = async () => {
    try {
      await createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    await handleSignIn()
  }

  const handleSignIn = async () => {
    try {
      await signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })

      return handleUploadPhotos()
    } catch (error) {
      triggerCorrectAlert(error)

      return router.navigate('Login')
    }
  }

  const handleUploadPhotos = async () => {
    try {
      await uploadPhotos(user.photos)
    } catch (error) {
      return triggerCorrectAlert(error)
    }
  }

  return (
    <FormPageTemplate title="Seu perfil ficará assim">
      <StudentInfo student={user} />

      <PrimaryButton onPress={handleSignUp}>CADASTRAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpProfile
