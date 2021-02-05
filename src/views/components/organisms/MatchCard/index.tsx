import React from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { MaterialCommunityIcons } from '@expo/vector-icons'

import Match from 'main/entities/Match'

import { Row } from 'views/styles/globalStyles'
import theme from 'views/styles/theme'

export interface MatchCardProps {
  match: Match
}

const MatchCard: React.FC<MatchCardProps> = ({ match }) => {
  return (
    <View
      style={{
        minHeight: Dimensions.get('window').height / 1.75,
        width: '100%',
        position: 'relative',
        marginBottom: 40,
      }}
    >
      <Image style={{ flex: 1 }} source={{ uri: match.photos[0] }} />

      <Row
        style={{
          position: 'absolute',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          height: 32,
          justifyContent: 'space-between',
        }}
      >
        <View
          style={{
            height: '100%',
            width: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          <Text>OI</Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: theme.fonts.titles.secondary,
            color: '#fff',
            paddingTop: 2,
          }}
        >
          {match.name}
        </Text>
        <View
          style={{
            height: '100%',
            width: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
        >
          <Text>oi</Text>
        </View>
      </Row>

      <Row style={{ height: 44, width: '100%' }}>
        {match.contacts.facebook && (
          <RectButton
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#4267B2',
            }}
          >
            <MaterialCommunityIcons name="facebook" color="#fff" size={32} />
          </RectButton>
        )}
        {match.contacts.instagram && (
          <RectButton
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E1306C',
            }}
          >
            <MaterialCommunityIcons name="instagram" color="#fff" size={32} />
          </RectButton>
        )}
        {match.contacts.twitter && (
          <RectButton
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1DA1F2',
            }}
          >
            <MaterialCommunityIcons name="twitter" color="#fff" size={32} />
          </RectButton>
        )}
        {match.contacts.whatsapp && (
          <RectButton
            style={{
              flex: 1,
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#64B161',
            }}
          >
            <MaterialCommunityIcons name="whatsapp" color="#fff" size={32} />
          </RectButton>
        )}
      </Row>
    </View>
  )
}

export default MatchCard
