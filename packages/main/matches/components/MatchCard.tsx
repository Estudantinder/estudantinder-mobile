import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Alert, Linking } from 'react-native'

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import StudentDataAdapter from 'packages/adapters/StudentAdapter'
import Match from 'packages/entities/Match'
import Student from 'packages/entities/Student'
import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { AuthenticatedNavigationPagesParamsProps } from 'packages/router/stacks/authenticated'

import {
  MatchCardContainer,
  MatchCardImage,
  MatchCardTopBar,
  MatchCardTopBarButton,
  MatchCardTopBarTitle,
  MatchCardContactsContainer,
  MatchCardContactButton,
} from './matches-components.styles'

export interface MatchCardProps {
  match: Match
  handleDeleteMatch(): Promise<void>
}

type PageProps = NativeStackScreenProps<
  AuthenticatedNavigationPagesParamsProps,
  typeof AUTHENTICATED_ROUTES.MAIN
>

type Navigation = PageProps['navigation']

const MatchCard: React.FC<MatchCardProps> = ({ match, handleDeleteMatch }) => {
  const router = useNavigation<Navigation>()

  const studentAdapter = new StudentDataAdapter(match)

  const handleNavigateToTargetProfile = () => {
    const student = new Student(match)

    router.navigate(AUTHENTICATED_ROUTES.TARGET_PROFILE, {
      student: { ...student, birth_date: student.birth_date.getTime() },
    })
  }

  const confirmDeleteMatch = () => {
    Alert.alert(
      'Deseja excluir esse match?',
      'Você não vai poder desfazer essa ação, mas poderá dar like de novo nesse estudante no futuro',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          style: 'default',
          text: 'Confirmar',
          onPress: handleDeleteMatch,
        },
      ]
    )
  }

  const Icon = ({
    name,
  }: {
    name: 'facebook' | 'instagram' | 'twitter' | 'whatsapp'
  }) => <MaterialCommunityIcons name={name} color="#fff" size={28} />

  const handleOpenFacebook = () => {
    if (!match.contacts.facebook) return

    Linking.openURL(`https://facebook.com/${match.contacts.facebook}`)
  }

  const handleOpenInstagram = () => {
    if (!match.contacts.instagram) return

    Linking.openURL(`https://instagram.com/${match.contacts.instagram}`)
  }

  const handleOpenWhatsapp = () => {
    if (!match.contacts.whatsapp) return

    Linking.openURL(`whatsapp://send?phone=${match.contacts.whatsapp}`)
  }

  const handleOpenTwitter = () => {
    if (!match.contacts.twitter) return

    Linking.openURL(`https://twitter.com/${match.contacts.twitter}`)
  }

  return (
    <MatchCardContainer>
      <MatchCardImage source={{ uri: match.photos[0] }} resizeMode="cover" />

      <MatchCardTopBar>
        <MatchCardTopBarButton onPress={handleNavigateToTargetProfile}>
          <MaterialCommunityIcons name="account-box" size={24} color="#fff" />
        </MatchCardTopBarButton>

        <MatchCardTopBarTitle>
          {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
        </MatchCardTopBarTitle>

        <MatchCardTopBarButton onPress={confirmDeleteMatch}>
          <Feather name="trash-2" size={24} color="#fff" />
        </MatchCardTopBarButton>
      </MatchCardTopBar>

      <MatchCardContactsContainer>
        {match.contacts.facebook && (
          <MatchCardContactButton
            backgroundColor="#4267B2"
            onPress={handleOpenFacebook}
          >
            <Icon name="facebook" />
          </MatchCardContactButton>
        )}

        {match.contacts.instagram && (
          <MatchCardContactButton
            backgroundColor="#fd3376"
            onPress={handleOpenInstagram}
          >
            <Icon name="instagram" />
          </MatchCardContactButton>
        )}

        {match.contacts.twitter && (
          <MatchCardContactButton
            backgroundColor="#1DA1F2"
            onPress={handleOpenTwitter}
          >
            <Icon name="twitter" />
          </MatchCardContactButton>
        )}

        {match.contacts.whatsapp && (
          <MatchCardContactButton
            backgroundColor="#64B161"
            onPress={handleOpenWhatsapp}
          >
            <Icon name="whatsapp" />
          </MatchCardContactButton>
        )}
      </MatchCardContactsContainer>
    </MatchCardContainer>
  )
}

export default MatchCard
