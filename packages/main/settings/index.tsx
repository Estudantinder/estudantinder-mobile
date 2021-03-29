import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Alert, View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { useAuthContext } from 'packages/auth/context'
import MenuCard from 'packages/components/MenuCard'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { VerticalDivider } from 'packages/styles'
import theme from 'packages/styles/theme'

import DeleteUserUseCase from './use-cases/delete-user'

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  const router = useNavigation()

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
        <MenuCard
          icon={
            <Feather
              name="help-circle"
              color={theme.colors.secondary.dark_purple}
              size={28}
            />
          }
          onPress={() => router.navigate(AUTHENTICATED_ROUTES.ONBOARDING)}
        >
          Ajuda
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          icon={
            <Feather
              name="flag"
              color={theme.colors.secondary.dark_purple}
              size={28}
            />
          }
          onPress={() => router.navigate(AUTHENTICATED_ROUTES.ABOUT_PROJECT)}
        >
          Sobre o aplicativo
        </MenuCard>
        <VerticalDivider />
        <MenuCard
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
        </MenuCard>
        <VerticalDivider />

        <MenuCard
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
        </MenuCard>
        <VerticalDivider />
      </View>
    </StackPageTemplate>
  )
}

export default Settings
