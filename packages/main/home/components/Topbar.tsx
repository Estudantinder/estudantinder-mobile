import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'

import { AUTHENTICATED_ROUTES } from 'packages/router/constants'

import LogoWhite from '../assets/logo_white.png'
import { TopBarContainer } from './home-components.styles'

export interface HomeTopBarProps {
  onFiltersPressed(): void
}

const HomeTopBar: React.FC<HomeTopBarProps> = (props) => {
  const router = useNavigation()

  const navigateToSettings = () => {
    router.navigate(AUTHENTICATED_ROUTES.SETTINGS)
  }

  return (
    <TopBarContainer>
      <BorderlessButton onPress={navigateToSettings}>
        <Feather name="settings" color="#fff" size={24} />
      </BorderlessButton>

      <Image source={LogoWhite} resizeMode="contain" />

      <BorderlessButton onPress={props.onFiltersPressed}>
        <Feather name="filter" color="#fff" size={24} />
      </BorderlessButton>
    </TopBarContainer>
  )
}

export default HomeTopBar
