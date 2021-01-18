import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { useAuthContext } from 'main/context/auth'
import { useSignUpContext } from 'main/context/sign-up'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import FormPageTemplate from 'views/components/templates/FormPageTemplate'
import { InputLabel } from 'views/styles/globalStyles'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

const SignUpImages: React.FC = () => {
  const { createUser, getUser } = useSignUpContext()
  const { signIn } = useAuthContext()

  const router = useNavigation()

  async function handlePressSubmit() {
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
    <FormPageTemplate title="Imagens">
      <InputLabel>{String(JSON.stringify(getUser()))}</InputLabel>

      <PrimaryButton onPress={handlePressSubmit}>CADASTRAR</PrimaryButton>
    </FormPageTemplate>
  )
}

export default SignUpImages
