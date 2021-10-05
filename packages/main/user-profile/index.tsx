import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'
import ShowStudent from 'packages/show-student-info'
import { Title, PageContainer, SafeAreaContainer } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import { NotFoundContainer } from '../main.styles'

import { useMainContext } from '../context'
import {
  UserProfileEditButtonContainer,
  UserProfileEditButton,
} from './user-profile.styles'

type MainPageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  'Main'
>

type Navigation = MainPageProps['navigation']

const UserProfile: React.FC = () => {
  const { profile } = useMainContext()

  const { theme } = useToggleThemeContext()

  const router = useNavigation<Navigation>()

  const navigateToEditAuthUser = () => {
    router.navigate(AUTHENTICATED_ROUTES.EDIT_AUTH_USER)
  }

  if (!profile)
    return (
      <PageContainer>
        <NotFoundContainer>
          <ActivityIndicator size={44} color={theme.base.purple} />
        </NotFoundContainer>
      </PageContainer>
    )

  return (
    <SafeAreaContainer>
      <Title>Meu Perfil</Title>

      <UserProfileEditButtonContainer>
        <UserProfileEditButton onPress={navigateToEditAuthUser}>
          <Feather name="edit" color={theme.base.purple} size={24} />
        </UserProfileEditButton>
      </UserProfileEditButtonContainer>

      <Scroll>
        <ShowStudent student={profile} />
      </Scroll>
    </SafeAreaContainer>
  )
}

export default UserProfile
