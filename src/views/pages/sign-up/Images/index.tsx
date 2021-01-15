import React from 'react'

import { useSignUpContext } from 'main/context/sign-up'

import FormButton from 'views/components/atoms/FormButton'
import GoBackButton from 'views/components/atoms/GoBackButton'
import SignUpContainer from 'views/components/templates/SignUpContainer'
import { FormMain, FormTitle, InputLabel } from 'views/styles/globalStyles'

const SignUpImages: React.FC = () => {
  const { getUser } = useSignUpContext()

  function handleButtonPress() {
    console.log(getUser())
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
