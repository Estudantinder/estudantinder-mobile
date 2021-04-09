import React from 'react'
import { View, Linking } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import env from 'env'
import Constants from 'expo-constants'

import MenuCard from 'packages/components/MenuCard'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import { VerticalDivider } from 'packages/styles'
import { useToggleThemeContext } from 'packages/styles/context'

import { EnvText } from './about-project.styles'

const AboutProjectPage: React.FC = () => {
  const { theme } = useToggleThemeContext()

  const handleOpenMail = () => {
    Linking.openURL('mailto:estudantinder@gmail.com')
  }

  const handleOpenSite = () => {
    Linking.openURL('https://estudantinder.com.br/')
  }

  return (
    <StackPageTemplate title="Sobre o aplicativo" withoutPadding>
      <View style={{ width: '100%' }}>
        <MenuCard iconName="code" onPress={() => 0}>
          {`Versão: ${Constants.manifest.version}`}
        </MenuCard>
        <VerticalDivider />
        <MenuCard iconName="mail" onPress={handleOpenMail}>
          Email para contato
        </MenuCard>
        <VerticalDivider />
        <MenuCard
          customIcon={
            <MaterialCommunityIcons
              name="lightbulb-on-outline"
              color={theme.dark_purple}
              size={28}
            />
          }
          onPress={handleOpenSite}
        >
          Ideia do Projeto
        </MenuCard>
        <VerticalDivider />
      </View>

      <EnvText>{`env: ${env().env_name}`}</EnvText>
    </StackPageTemplate>
  )
}

export default AboutProjectPage
