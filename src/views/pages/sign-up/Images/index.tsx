import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert } from 'react-native'

import { useSignUpContext } from 'main/context/sign-up'
import createUser from 'main/use-cases/create-user'
import createUserToken from 'main/use-cases/create-user-token'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, InputLabel } from 'views/styles/globalStyles'

const SignUpImages: React.FC = () => {
  const { getUser } = useSignUpContext()

  const router = useNavigation()

  async function handleButtonPress() {
    const user = getUser()

    const { error } = await createUser(user)

    if (error) return Alert.alert(error.title, error.message)

    const { jwt, error: createTokenError } = await createUserToken({
      email: user.email,
      password: user.password,
      stay_logged: false,
    })

    if (!jwt) {
      if (createTokenError) {
        Alert.alert(createTokenError.title, createTokenError.message)
      } else {
        alert('Algo deu errado')
      }

      return router.navigate('Login')
    }

    return router.navigate('Home')
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
