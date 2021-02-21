import { BorderlessButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

export const UserProfileEditButtonContainer = styled.View`
  position: absolute;
  right: 0px;
  top: 0px;
  padding-right: 24px;
  padding-top: 32px;
  justify-content: center;
  align-items: center;
`

export const UserProfileEditButton = styled(BorderlessButton)`
  padding: 4px;
  justify-content: center;
  align-items: center;
`
