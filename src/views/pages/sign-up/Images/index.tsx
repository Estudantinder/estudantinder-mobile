import React from 'react'
import { Alert } from 'react-native'

import { useSignUpContext } from 'main/context/sign-up'
import createUser from 'main/use-cases/create-user'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, InputLabel } from 'views/styles/globalStyles'

const SignUpImages: React.FC = () => {
  const { getUser } = useSignUpContext()

  async function handleButtonPress() {
    const user = getUser()

    const { id, error } = await createUser(user)

    if (error) return Alert.alert(error.title, error.message)

    alert(id)
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
