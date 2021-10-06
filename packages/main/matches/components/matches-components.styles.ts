import { Dimensions } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import { Row } from 'packages/styles'
import { fonts } from 'packages/styles/theme'

export const MatchCardContainer = styled.View`
  min-height: ${Dimensions.get('window').height / 1.6}px;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  overflow: hidden;
  border-radius: 6px;
`

export const MatchCardImage = styled.Image`
  flex: 1;
`

export const MatchCardTopBar = styled(Row)`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  height: 32px;
  justify-content: space-between;
`

export const MatchCardTopBarButton = styled(RectButton)`
  height: 100%;
  width: 40px;
  justify-content: center;
  align-items: center;
`

export const MatchCardTopBarTitle = styled.Text`
  font-size: 16px;
  font-family: ${fonts.titles.secondary};
  color: #fff;
  padding-top: 2px;
`

export const MatchCardContactsContainer = styled(Row)`
  height: 36px;
  width: 100%;
`

export interface ContactButtonStylesProps {
  backgroundColor: string
}

export const MatchCardContactButton = styled(
  BorderlessButton
)<ContactButtonStylesProps>`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`
