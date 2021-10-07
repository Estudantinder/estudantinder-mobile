import React from 'react'
import { View, Linking } from 'react-native'

import StackPageTemplate from 'packages/components/StackPageTemplate'
import { Row } from 'packages/styles'

import CreditsItem from './components/CreditsItem'
import LicenseItem from './components/LicenseItem'
import {
  CreditsBottomContainer,
  CreditsGroupContainer,
  CreditsGroupTitle,
} from './credits.styles'

const items = [
  {
    title: 'React Native',
    text: 'MIT License',
  },
  {
    title: 'react-native-vector-icons',
    text: 'MIT License',
  },
  {
    title: 'react-native-reanimated',
    text: 'MIT License',
  },
]

const CreditsPage: React.FC = () => {
  const openStorySet = () => {
    Linking.openURL('https://storyset.com/')
  }

  return (
    <View style={{ flex: 1 }}>
      <StackPageTemplate title="Créditos">
        <View style={{ height: 40 }} />

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

          {items.map((item) => (
            <LicenseItem
              label={item.title}
              license={item.text}
              key={item.title}
            />
          ))}
        </CreditsGroupContainer>
      </StackPageTemplate>

      <CreditsBottomContainer>
        <CreditsGroupTitle>
          Feito por estudantes para estudantes ❤️
        </CreditsGroupTitle>
      </CreditsBottomContainer>
    </View>
  )
}

export default CreditsPage
