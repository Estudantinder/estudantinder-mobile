import React from 'react'

import { useAuthContext } from 'main/context/auth'

import PrimaryButton from 'views/components/atoms/PrimaryButton'
import { Container } from 'views/styles/globalStyles'

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  return (
    <Container>
      <PrimaryButton onPress={signOut}>Sair</PrimaryButton>
    </Container>
  )
}

export default Settings
