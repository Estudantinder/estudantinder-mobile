import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import theme from 'packages/styles/theme'

export const SettingsCardContainer = styled(RectButton)`
  height: 64px;
  width: 100%;

  flex-direction: row;
  align-items: center;
`
export const SettingsCardIcon = styled.View`
  width: 32px;
  height: 32px;

  justify-content: center;
  align-items: center;

  margin: 0px 20px;
`

export const SettingsCardTitle = styled.Text`
  font-family: ${theme.fonts.subtitle};
  font-size: 16px;
  line-height: 16px;
`

export const SettingsVerticalDivider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #e8e6e6;
`
