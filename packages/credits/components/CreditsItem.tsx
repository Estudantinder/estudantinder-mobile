import React from 'react'
import { View, Linking } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Feather from '@expo/vector-icons/Feather'

import { Row } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import { CreditsItemText } from '../credits.styles'

export interface CreditsItemProps {
  url: string
  children: React.ReactText
}

const CreditsItem: React.FC<CreditsItemProps> = (props) => {
  const { theme } = useToggleThemeContext()

  const handlePress = () => {
    Linking.openURL(props.url)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Row>
        <Feather name="link" size={16} color={theme.base.purple} />

        <View style={{ width: 4 }} />

        <CreditsItemText>{props.children}</CreditsItemText>
      </Row>
    </TouchableOpacity>
  )
}

export default CreditsItem
