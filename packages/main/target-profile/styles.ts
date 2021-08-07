import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

export const TargetProfileSettingsContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  padding-right: 24px;
  justify-content: center;
  align-items: center;
`

export const TargetProfileMoreButton = styled(BorderlessButton)`
  padding: 2px;
  justify-content: center;
  align-items: center;
`

export const TargetProfileSheetContainer = styled.View`
  flex: 1;
  background-color: ${(props) => theme(props).background.default};
`

export const TargetProfileActionsSheetContainer = styled.View`
  align-items: center;
  text-align: center;
  padding-top: 16px;
`
export const TargetProfileBasicReportSheetContainer = styled.View`
  align-items: center;
  text-align: center;
  padding: 16px 24px;
  padding-top: 16px;
  justify-content: space-around;
  flex: 1;
`

export const TargetProfileReportButtonContainer = styled(RectButton)`
  width: 100%;
  height: 45px;
  background-color: #eb5757;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TargetProfileReportButtonText = styled.Text`
  color: white;
  font-size: 14px;
  font-family: ${fonts.button};
`
