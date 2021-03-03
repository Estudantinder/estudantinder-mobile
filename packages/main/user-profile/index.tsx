import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import ShowStudent from 'packages/show-student-info'
import { Title, PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'
import alertModal from 'packages/utils/alertModal'

import { useMainContext } from '../context'
import {
  UserProfileEditButtonContainer,
  UserProfileEditButton,
} from './user-profile.styles'

const UserProfile: React.FC = () => {
  const { getProfile, profile } = useMainContext()

  const router = useNavigation()

  useEffect(() => {
    const fn = async () => {
      try {
        await getProfile()
      } catch (error) {
        alertModal(error)
      }
    }

    fn()
  }, [getProfile])

  const navigateToEditAuthUser = () => {
    router.navigate(AUTHENTICATED_ROUTES.EDIT_AUTH_USER)
  }

  if (!profile)
    return (
      <PageContainer>
        <Title>Carregando...</Title>
        <ActivityIndicator size={44} color={theme.colors.primary.purple} />
      </PageContainer>
    )

  return (
    <PageContainer withoutPadding>
      <Title>Meu Perfil</Title>

      <UserProfileEditButtonContainer>
        <UserProfileEditButton onPress={navigateToEditAuthUser}>
          <Feather name="edit" color={theme.colors.primary.purple} size={24} />
        </UserProfileEditButton>
      </UserProfileEditButtonContainer>

      <Scroll>
        <ShowStudent student={profile} />
      </Scroll>
    </PageContainer>
  )
}

export default UserProfile