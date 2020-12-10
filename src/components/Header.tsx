import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import HeaderStyled from '../styles/components/Header.styled'

export interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = (props) => {
  const router = useNavigation()

  function handleGoBack() {
    router.goBack()
  }

  return (
    <HeaderStyled.Header>
      <BorderlessButton onPress={handleGoBack}>
        <HeaderStyled.BackIcon />
      </BorderlessButton>

      <HeaderStyled.Title>{props.title}</HeaderStyled.Title>

      <View />
    </HeaderStyled.Header>
  )
}

export default Header
