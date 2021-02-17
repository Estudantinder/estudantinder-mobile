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

export interface SelectBackgroundStylesProps {
  backgroundColor?: string
}

export const SelectContainer = styled.View`
  margin-top: 20px;
`

export const SelectBackground = styled.View<SelectBackgroundStylesProps>`
  background-color: ${(props) =>
    props.backgroundColor || theme.colors.input.background};
  border-radius: 4px;
  min-height: 40px;
  justify-content: center;
  padding: 0px 8px;
`

export interface PrimaryLabelStylesProps {
  size: 'large' | 'small'
}

export const PrimaryLabelContainer = styled.View<PrimaryLabelStylesProps>`
  height: ${(props) => (props.size === 'large' ? 28 : 24)}px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  border-radius: 3px;
  background-color: ${theme.colors.primary.purple};
`

export const PrimaryLabelText = styled.Text<PrimaryLabelStylesProps>`
  color: #ffffff;
  font-family: ${theme.fonts.primary};
  font-size: ${(props) => (props.size === 'large' ? 12 : 10)}px;
  align-items: center;
  text-align: center;

  letter-spacing: 0.6px;
`
