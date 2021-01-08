import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { BorderlessButton } from 'react-native-gesture-handler'

import Styled from './styles'

export interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = (props) => {
  const router = useNavigation()

  function handleGoBack() {
    router.goBack()
  }

  return (
    <Styled.Header>
      <BorderlessButton onPress={handleGoBack}>
        <Styled.BackIcon />
      </BorderlessButton>

      <Styled.Title>{props.title}</Styled.Title>

      <View />
    </Styled.Header>
  )
}

export default Header
