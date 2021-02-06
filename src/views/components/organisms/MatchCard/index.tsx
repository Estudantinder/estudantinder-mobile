import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Linking } from 'react-native'

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

import Match from 'main/entities/Match'
import Student from 'main/entities/Student'

import StudentDataAdapter from 'shared/StudentDataAdapter'

import Styled from './styles'

export interface MatchCardProps {
  match: Match
  handleDeleteMatch(): Promise<void>
}

const MatchCard: React.FC<MatchCardProps> = ({ match, handleDeleteMatch }) => {
  const router = useNavigation()

  const studentAdapter = new StudentDataAdapter(match)

  const handleNavigateToTargetProfile = () => {
    const student = new Student(match)

    router.navigate('TargetProfile', {
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
    <Styled.Container>
      <Styled.Image source={{ uri: match.photos[0] }} resizeMode="cover" />

      <Styled.TopBar>
        <Styled.TopBarButton onPress={handleNavigateToTargetProfile}>
          <MaterialCommunityIcons name="account-box" size={24} color="#fff" />
        </Styled.TopBarButton>

        <Styled.TopBarTitle>
          {studentAdapter.getCompactedName()}, {studentAdapter.getAge()}
        </Styled.TopBarTitle>

        <Styled.TopBarButton onPress={confirmDeleteMatch}>
          <Feather name="trash-2" size={24} color="#fff" />
        </Styled.TopBarButton>
      </Styled.TopBar>

      <Styled.ContactsContainer>
        {match.contacts.facebook && (
          <Styled.ContactButton
            backgroundColor="#4267B2"
            onPress={handleOpenFacebook}
          >
            <MaterialCommunityIcons name="facebook" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.instagram && (
          <Styled.ContactButton
            backgroundColor="#fd3376"
            onPress={handleOpenInstagram}
          >
            <MaterialCommunityIcons name="instagram" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.twitter && (
          <Styled.ContactButton
            backgroundColor="#1DA1F2"
            onPress={handleOpenTwitter}
          >
            <MaterialCommunityIcons name="twitter" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.whatsapp && (
          <Styled.ContactButton
            backgroundColor="#64B161"
            onPress={handleOpenWhatsapp}
          >
            <MaterialCommunityIcons name="whatsapp" color="#fff" size={28} />
          </Styled.ContactButton>
        )}
      </Styled.ContactsContainer>
    </Styled.Container>
  )
}

export default MatchCard
