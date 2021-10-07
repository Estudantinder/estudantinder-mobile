import styled from 'styled-components/native'

import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const CreditsGroupContainer = styled.View`
  width: 100%;
`

export const CreditsGroupTitle = styled.Text`
  color: ${(props) => theme(props).text.default}
  font-family: ${fonts.input.label}
  font-size: 14px;
`

export const CreditsItemText = styled.Text`
  color: ${(props) => theme(props).text.default}
  font-family: ${fonts.subtitle}
  font-size: 14px;
  text-decoration-line: underline;
`

export const CreditsBottomContainer = styled.View`
  width: 100%;
  padding-vertical: 16px;
  align-items: center;
  justify-content: center;
  elevation: 20;
  background-color: ${(props) => theme(props).background.default};
`

export const LicenseItemContainer = styled.View`
  width: 100%;
  padding-vertical: 16px;
`

export const LicenseItemTitle = styled.Text`
  color: ${(props) => theme(props).text.default}
  font-family: ${fonts.subtitle}
  font-size: 14px;
`

export const LicenseItemTextContainer = styled.View`
  width: 100%;
  padding-vertical: 12px;
  padding-horizontal: 8px;
  border-radius: 8px;
  max-height: 2000px;
  overflow: hidden;
  background-color: ${(props) => theme(props).input.background};
`

export const LicenseItemText = styled.Text`
  color: ${(props) => theme(props).text.default}
  font-family: ${fonts.input.text}
  font-size: 8px;
`
