import { BorderlessButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

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
