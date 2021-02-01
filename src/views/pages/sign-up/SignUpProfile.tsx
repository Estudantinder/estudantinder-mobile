import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const SignUpProfile: React.FC = () => {
  const { createUser, getUser } = useSignUpContext()

  const { signIn } = useAuthContext()

  const router = useNavigation()

  async function handleSignUp() {
    try {
      await createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    await handleSignIn()
  }

  async function handleSignIn() {
    try {
      const user = getUser()

      if (!user) return router.navigate('Login')

      await signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })
    } catch (error) {
      triggerCorrectAlert(error)

      return router.navigate('Login')
    }
  }

  return (
    <FormPageTemplate title="Seu perfil ficará assim">
      <PrimaryButton onPress={handleSignUp}>CADASTRAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpProfile
