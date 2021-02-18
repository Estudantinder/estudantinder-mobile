import React from 'react'

import { useAuthContext } from 'packages/auth/context'
import PrimaryButton from 'packages/components/PrimaryButton'
import StackPageTemplate from 'packages/components/StackPageTemplate'

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  return (
    <StackPageTemplate title="Configurações">
      <PrimaryButton onPress={signOut}>Sair</PrimaryButton>
    </StackPageTemplate>
  )
}

export default Settings
