import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import theme from 'packages/utils/theme'

export const ImagePickerCardContainer = styled(RectButton)`
  flex: 1;
  height: 240px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => theme(props).background.light_purple};
  border-radius: 6px;
`

export const ImagePickerCardImage = styled.Image`
  width: 100%;
  height: 100%;
  resize-mode: cover;
  border-radius: 6px;
`

export const ImagePickerCardDeleteContainer = styled.View`
  border-top-right-radius: 6px;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 28px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`

export const ImagePickerCardDeleteButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 28px;
  border-top-right-radius: 6px;
`
