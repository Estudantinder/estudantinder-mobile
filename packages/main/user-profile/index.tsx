import React, { useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native'

import { Feather } from '@expo/vector-icons'

import Scroll from 'packages/components/Scroll'
import User from 'packages/entities/User'
import ShowTargetStudent from 'packages/student-info/show-target-info/ShowTargetInfo'
import { Title, PageContainer } from 'packages/styles'
import theme from 'packages/styles/theme'
import alertModal from 'packages/utils/alertModal'

import GetUserProfileUseCase from '../use-cases/get-user-profile'
import {
  UserProfileEditButtonContainer,
  UserProfileEditButton,
} from './user-profile.styles'

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const fn = async () => {
      try {
        const newUser = await GetUserProfileUseCase()

        setUser(newUser)
      } catch (error) {
        alertModal(error)
      }
    }

    fn()
  }, [])

  if (!user)
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
        <ShowTargetStudent student={user} />
      </Scroll>
    </PageContainer>
  )
}

export default UserProfile
