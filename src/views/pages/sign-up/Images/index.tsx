import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, InputLabel } from 'views/styles/globalStyles'

import triggerCorrectAlert from 'shared/triggerCorrectAlert'

const SignUpImages: React.FC = () => {
  const { createUser, getUser } = useSignUpContext()
  const { signIn } = useAuthContext()

  const router = useNavigation()

  async function handleButtonPress() {
    try {
      await createUser()
    } catch (error) {
      return triggerCorrectAlert(error)
    }

    try {
      const user = getUser()

      await signIn({
        email: user.email,
        password: user.password,
        stay_logged: false,
      })

      return router.navigate('Home')
    } catch (error) {
      triggerCorrectAlert(error)

      return router.navigate('Login')
    }
  }

  return (
    <SignUpContainer>
      <GoBackButton />

      <FormMain>
        <FormTitle>Imagens</FormTitle>

        <InputLabel>{String(JSON.stringify(getUser()))}</InputLabel>
      </FormMain>

      <FormButton onPress={handleButtonPress} title="CADASTRAR" />
    </SignUpContainer>
  )
}

export default SignUpImages
