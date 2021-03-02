import React from 'react'
import { Alert, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { useAuthContext } from 'packages/auth/context'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import theme from 'packages/styles/theme'

import SettingsCard from './components/SettingsCard'
import { SettingsVerticalDivider } from './settings.styles'
import DeleteUserUseCase from './use-cases/delete-user'

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  const handleDeleteUser = async () => {
    await DeleteUserUseCase()

    await signOut()
  }

  const confirmDeleteUser = () => {
    Alert.alert(
      'Deseja deletar perfil?',
      'Você não poderá desfazer essa ação!',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          style: 'default',
          text: 'Confirmar',
          onPress: handleDeleteUser,
        },
      ]
    )
  }

  return (
    <StackPageTemplate title="Configurações" withoutPadding>
      <View style={{ width: '100%' }}>
        <SettingsCard
          icon={
            <Feather
              name="log-out"
              color={theme.colors.secondary.dark_purple}
              size={28}
            />
          }
          onPress={signOut}
        >
          Sair do App
        </SettingsCard>
        <SettingsVerticalDivider />

        <SettingsCard
          icon={
            <Feather
              name="alert-triangle"
              color={theme.colors.secondary.dark_purple}
              size={28}
            />
          }
          onPress={confirmDeleteUser}
        >
          Deletar Perfil
        </SettingsCard>
        <SettingsVerticalDivider />
      </View>
    </StackPageTemplate>
  )
}

export default Settings
