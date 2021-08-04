import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import ShowStudent from 'packages/show-student-info'
import { Title, PageContainer, SafeAreaContainer } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'
import alertModal from 'packages/utils/alertModal'

import { NotFoundContainer } from '../main.styles'

import { useMainContext } from '../context'
import {
  UserProfileEditButtonContainer,
  UserProfileEditButton,
} from './user-profile.styles'

const UserProfile: React.FC = () => {
  const { getProfile, profile } = useMainContext()

  const { theme } = useToggleThemeContext()

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
