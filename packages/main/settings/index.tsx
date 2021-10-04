import { useNavigation } from '@react-navigation/core'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Alert, View } from 'react-native'

import { useAuthContext } from 'packages/auth/context'
import MenuCard from 'packages/components/MenuCard'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'
import { VerticalDivider } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import DeleteUserUseCase from './use-cases/delete-user'

type PageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  typeof AUTHENTICATED_ROUTES.SETTINGS
>

type Navigation = PageProps['navigation']

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  const { theme, toggle } = useToggleThemeContext()

  const router = useNavigation<Navigation>()

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
          onPress={toggle}
          iconName={theme.name === 'light' ? 'moon' : 'sun'}
        >
          {`Tema ${theme.name === 'light' ? 'Escuro' : 'Claro'}`}
        </MenuCard>

        <VerticalDivider />
        <MenuCard
          iconName="help-circle"
          onPress={() => router.navigate(AUTHENTICATED_ROUTES.ONBOARDING)}
        >
          Ajuda
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="info"
          onPress={() => router.navigate(AUTHENTICATED_ROUTES.ABOUT_PROJECT)}
        >
          Sobre o aplicativo
        </MenuCard>
        <VerticalDivider />

        <MenuCard
          iconName="edit"
          onPress={() => router.navigate(AUTHENTICATED_ROUTES.EDIT_AUTH_USER)}
        >
          Editar Perfil
        </MenuCard>
        <VerticalDivider />

        <MenuCard iconName="log-out" onPress={signOut}>
          Sair do App
        </MenuCard>
        <VerticalDivider />

        <MenuCard iconName="alert-triangle" onPress={confirmDeleteUser}>
          Deletar Perfil
        </MenuCard>
        <VerticalDivider />
      </View>
    </StackPageTemplate>
  )
}

export default Settings
