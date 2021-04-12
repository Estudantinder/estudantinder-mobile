import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import { AUTHENTICATED_ROUTES } from 'packages/router/constants'
import { useToggleThemeContext } from 'packages/styles/context'

import LogoDark from '../../assets/logo_dark.png'
import LogoWhite from '../../assets/logo_white.png'
import { TopBarContainer } from './home-components.styles'

export interface HomeTopBarProps {
  onFiltersPressed(): void
}

const HomeTopBar: React.FC<HomeTopBarProps> = (props) => {
  const router = useNavigation()

  const { theme } = useToggleThemeContext()

  const navigateToSettings = () => {
    router.navigate(AUTHENTICATED_ROUTES.SETTINGS)
  }

  const Logo = theme.name === 'dark' ? LogoDark : LogoWhite

  return (
    <TopBarContainer>
      <BorderlessButton onPress={navigateToSettings}>
        <Feather
          name="settings"
          color={theme.pages.home.topbar.icons}
          size={24}
        />
      </BorderlessButton>

      <Image source={Logo} resizeMode="contain" />

      <BorderlessButton onPress={props.onFiltersPressed}>
        <Feather
          name="filter"
          color={theme.pages.home.topbar.icons}
          size={24}
        />
      </BorderlessButton>
    </TopBarContainer>
  )
}

export default HomeTopBar
