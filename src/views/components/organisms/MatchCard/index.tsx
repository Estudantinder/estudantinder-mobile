import { useNavigation } from '@react-navigation/native'
import React from 'react'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Match from 'main/entities/Match'
import Student from 'main/entities/Student'

import Styled from './styles'

export interface MatchCardProps {
  match: Match
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  const router = useNavigation()

  const handleNavigateToTargetProfile = () => {
    const student = new Student(match)

    router.navigate('TargetProfile', {
      student: { ...student, birth_date: student.birth_date.getTime() },
    })
  }

  return (
    <Styled.Container>
      <Styled.Image source={{ uri: match.photos[0] }} resizeMode="cover" />

      <Styled.TopBar>
        <Styled.TopBarButton onPress={handleNavigateToTargetProfile}>
          <MaterialCommunityIcons name="account-box" size={24} color="#fff" />
        </Styled.TopBarButton>

        <Styled.TopBarTitle>{match.name}</Styled.TopBarTitle>

        <Styled.TopBarButton></Styled.TopBarButton>
      </Styled.TopBar>

      <Styled.ContactsContainer>
        {match.contacts.facebook && (
          <Styled.ContactButton backgroundColor="#4267B2">
            <MaterialCommunityIcons name="facebook" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.instagram && (
          <Styled.ContactButton backgroundColor="#fd3376">
            <MaterialCommunityIcons name="instagram" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.twitter && (
          <Styled.ContactButton backgroundColor="#1DA1F2">
            <MaterialCommunityIcons name="twitter" color="#fff" size={28} />
          </Styled.ContactButton>
        )}

        {match.contacts.whatsapp && (
          <Styled.ContactButton backgroundColor="#64B161">
            <MaterialCommunityIcons name="whatsapp" color="#fff" size={28} />
          </Styled.ContactButton>
        )}
      </Styled.ContactsContainer>
    </Styled.Container>
  )
}

export default MatchCard
