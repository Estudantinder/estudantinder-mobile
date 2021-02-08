import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

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
  background-color: ${(props) => props.theme.colors.primary.green};
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const PrimaryButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.button};
  font-weight: 700;
  text-align: center;
  color: #fff;
`
