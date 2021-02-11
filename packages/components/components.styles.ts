import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import theme from 'packages/styles/theme'

export const ScrollMain = styled.View`
  min-height: 60%;
  width: 100%;

  justify-content: space-around;
  align-items: center;
`

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export const GoBackButtonContainer = styled(BorderlessButton)`
  position: absolute;
  left: 0px;
  top: 0px;
`

export const PrimaryButtonContainer = styled(RectButton)`
  background-color: ${theme.colors.primary.green};
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const PrimaryButtonText = styled.Text`
  font-family: ${theme.fonts.button};
  font-weight: 700;
  text-align: center;
  color: #fff;
`

interface ButtonStyleProps {
  isActive: boolean
}

export const OptionButtonContainer = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  background-color: ${(props) =>
    props.isActive ? theme.colors.primary.purple : '#fff'};
  border-width: 1px;
  border-color: ${theme.colors.primary.purple};
`

export const OptionButtonText = styled.Text<ButtonStyleProps>`
  font-family: ${theme.fonts.button};
  color: ${(props) => (props.isActive ? '#fff' : theme.colors.primary.purple)};
`
