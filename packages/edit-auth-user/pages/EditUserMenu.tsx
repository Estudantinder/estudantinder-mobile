import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'

import MenuCard from 'packages/components/MenuCard'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { EDIT_AUTH_USER_ROUTES } from 'packages/router/constants'
import { VerticalDivider } from 'packages/styles'

const EditAuthUserMenu: React.FC = () => {
  const router = useNavigation()

  return (
    <StackPageTemplate title="Editar Perfil" withoutPadding>
      <View style={{ width: '100%' }}>
        <MenuCard
          iconName="lock"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.SECRETS)}
        >
          Sua conta
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="user"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.ABOUT)}
        >
          Suas Informações
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="book"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.SCHOOL)}
        >
          Informações escolares
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="phone"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.CONTACTS)}
        >
          Contatos
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="align-center"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.DETAILS)}
        >
          Biografia e matérias
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          iconName="camera"
          onPress={() => router.navigate(EDIT_AUTH_USER_ROUTES.PHOTOS)}
        >
          Fotos
        </MenuCard>
      </View>
    </StackPageTemplate>
  )
}

export default EditAuthUserMenu
