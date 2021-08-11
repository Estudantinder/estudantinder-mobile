import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { Image } from 'react-native'

import { useToggleThemeContext } from 'packages/styles/context'
import { fonts } from 'packages/styles/theme'

import SuccessDarkModeIcon from '../../assets/success-dark-mode-icon.png'
import SuccessIcon from '../../assets/success-icon.png'

const TargetProfileReportSuccessPage: React.FC = () => {
  // using any because type definitions are wrong
  const router = useNavigation() as any

  const { theme } = useToggleThemeContext()

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.popToTop()
    }, 1200)

    return () => clearTimeout(timeout)
  }, [router])

  return (
    <View
      style={{
        backgroundColor:
          theme.name === 'light' ? theme.base.green : theme.background.default,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          fontSize: 18,
          color: '#ffffff',
          fontFamily: fonts.logo,
          paddingBottom: 32,
          paddingHorizontal: 40,
          textAlign: 'center',
        }}
      >
        Denúncia recebida com sucesso!
      </Text>

      <Image
        source={theme.name === 'light' ? SuccessIcon : SuccessDarkModeIcon}
      />
    </View>
  )
}

export default TargetProfileReportSuccessPage
