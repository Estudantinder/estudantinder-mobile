import React, { useEffect, useState } from 'react'
import { ActivityIndicator, RefreshControl } from 'react-native'

import { Feather } from '@expo/vector-icons'

import User from 'main/entities/User'
import getJwtUser from 'main/use-cases/get-jwt-user'

import Scroll from 'views/components/atoms/Scroll'
import StudentInfo from 'views/components/templates/StudentInfo'
import { Container, Title } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'
import triggerCorrectAlert from 'views/utils/triggerCorrectAlert'

import Styled from './styles'

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User>()

  const [refreshing, setRefreshing] = useState(false)

  const fn = async () => {
    try {
      const newUser = await getJwtUser()

      setUser(newUser)
    } catch (error) {
      triggerCorrectAlert(error)
    }
  }

  const onRefresh = React.useCallback(() => {
    setRefreshing(true)

    fn().then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    fn()
  }, [])

  if (!user)
    return (
      <Container>
        <Title>Carregando...</Title>
        <ActivityIndicator size={64} color={theme.colors.primary.purple} />
      </Container>
    )

  return (
    <Container>
      <Title>Meu Perfil</Title>

      <Styled.EditButtonContainer>
        <Styled.EditButton>
          <Feather name="edit" color={theme.colors.primary.purple} size={24} />
        </Styled.EditButton>
      </Styled.EditButtonContainer>

      <Scroll
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <StudentInfo student={user} />
      </Scroll>
    </Container>
  )
}

export default UserProfile
