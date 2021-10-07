import React from 'react'
import { Linking, View } from 'react-native'

import { Row, Title } from 'packages/styles'

import { CreditsGroupContainer, CreditsGroupTitle } from '../credits.styles'
import CreditsItem from './CreditsItem'

const CreditsHeader: React.FC = () => {
  const openStorySet = () => {
    Linking.openURL('https://storyset.com/')
  }

  return (
    <View style={{ width: '100%' }}>
      <View style={{ height: 32 }} />

      <Title style={{ textAlign: 'center' }}>Créditos</Title>

      <View style={{ height: 32 }} />

      <CreditsGroupContainer>
        <Row style={{ width: '100%', justifyContent: 'flex-start' }}>
          <CreditsGroupTitle>Ilustrações por </CreditsGroupTitle>

          <CreditsGroupTitle
            style={{ textDecorationLine: 'underline' }}
            onPress={openStorySet}
          >
            StorySet
          </CreditsGroupTitle>
        </Row>

        <View style={{ height: 16 }} />

        <CreditsItem url="https://storyset.com/illustration/exams/bro">
          Exams
        </CreditsItem>

        <View style={{ height: 8 }} />

        <CreditsItem url="https://storyset.com/illustration/search/rafiki">
          Search
        </CreditsItem>

        <View style={{ height: 8 }} />

        <CreditsItem url="https://storyset.com/illustration/social-life/pana">
          Social Life
        </CreditsItem>

        <View style={{ height: 8 }} />

        <CreditsItem url="https://storyset.com/illustration/team-work/pana">
          Team-Work
        </CreditsItem>

        <View style={{ height: 8 }} />

        <CreditsItem url="https://storyset.com/illustration/friendship/pana">
          Friendship
        </CreditsItem>
      </CreditsGroupContainer>

      <View style={{ height: 32 }} />

      <CreditsGroupContainer>
        <CreditsGroupTitle>Bibliotecas de terceiros:</CreditsGroupTitle>
      </CreditsGroupContainer>
    </View>
  )
}

export default CreditsHeader
