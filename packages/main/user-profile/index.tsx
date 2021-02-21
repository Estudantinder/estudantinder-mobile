import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import ShowTargetStudent from 'packages/student-info/show-target-info/ShowTargetInfo'
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
        <UserProfileEditButton>
          <Feather name="edit" color={theme.colors.primary.purple} size={24} />
        </UserProfileEditButton>
      </UserProfileEditButtonContainer>

      <Scroll>
        <ShowTargetStudent student={profile} />
      </Scroll>
    </PageContainer>
  )
}

export default UserProfile
