import React from 'react'
import { View } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { useAuthContext } from 'packages/auth/context'
import StackPageTemplate from 'packages/components/StackPageTemplate'
import theme from 'packages/styles/theme'

import SettingsCard from './components/SettingsCard'
import { SettingsVerticalDivider } from './settings.styles'

const Settings: React.FC = () => {
  const { signOut } = useAuthContext()

  return (
    <StackPageTemplate title="Configurações" withoutPadding>
      <View style={{ width: '100%' }}>
        <SettingsCard
          icon={
            <Feather
              name="log-out"
              color={theme.colors.secondary.dark_purple}
              size={28}
            />
          }
          title="Sair"
          onPress={signOut}
        />
        <SettingsVerticalDivider />
      </View>
    </StackPageTemplate>
  )
}

export default Settings
