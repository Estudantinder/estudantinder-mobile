import { Animated } from 'react-native'
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import Constants from 'expo-constants'
import styled from 'styled-components/native'

import { Row } from 'packages/styles'
import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const TopBarContainer = styled(Row)`
  justify-content: space-between;
  margin-bottom: 12px;
  background-color: ${(props) => theme(props).pages.home.topbar.background};
  padding: 0px 16px;
  padding-bottom: 8px;
  padding-top: ${Constants.statusBarHeight + 8}px;
  elevation: 8;
`

export const StudentCardContainer = styled(Animated.View)`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`

export const StudentCardImage = styled.Image`
  flex: 1;
  background-color: #c0c0c0;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`

export const StudentCardFooter = styled.View`
  width: 100%;
  background-color: ${(props) => theme(props).pages.home.card.background};
  padding: 12px;
  justify-content: space-between;
  position: relative;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const StudentCardProfileButtonContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  padding-right: 16px;
  padding-top: 12px;
  justify-content: center;
  align-items: center;
`

export const StudentCardProfileButton = styled(BorderlessButton)`
  justify-content: center;
  align-items: center;
`

export const StudentCardNameText = styled.Text`
  font-family: ${fonts.titles.secondary};
  font-size: 18px;
  color: ${(props) => theme(props).base.green};
`

export const StudentCardFooterText = styled.Text`
  font-family: ${fonts.primary};
  color: ${(props) => theme(props).pages.home.card.foreground};
  font-size: 13px;
`

export const HomeLikeAndDislikeContainer = styled(Row)`
  justify-content: space-around;
  margin: 12px 0px;
`

export const HomeLikeAndDislikeButton = styled(RectButton)`
  border-radius: 999px;
  width: 52px;
  height: 52px;
  background-color: ${(props) => theme(props).background.default};
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 5;
`

export const StudentStackContainer = styled.View`
  flex: 1;
  width: 100%;
  padding-top: 4px;
`
