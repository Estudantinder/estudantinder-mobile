import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import MenuCard from 'packages/components/MenuCard'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'
import { VerticalDivider } from 'packages/styles'
import theme from 'packages/styles/theme'

const EditAuthUserMenu: React.FC = () => {
  const router = useNavigation()

  return (
    <StackPageTemplate title="Editar Perfil" withoutPadding>
      <View style={{ width: '100%' }}>
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.SECRETS)}
          icon={
            <Feather
              name="lock"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Sua conta
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.ABOUT)}
          icon={
            <Feather
              name="user"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Suas Informações
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.SCHOOL)}
          icon={
            <Feather
              name="book"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Informações escolares
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.CONTACTS)}
          icon={
            <Feather
              name="phone"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Contatos
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.DETAILS)}
          icon={
            <Feather
              name="align-center"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Biografia e matérias
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.PHOTOS)}
          icon={
            <Feather
              name="camera"
              size={28}
              color={theme.colors.secondary.dark_purple}
            />
          }
        >
          Fotos
        </MenuCard>
      </View>
    </StackPageTemplate>
  )
}

export default EditAuthUserMenu
