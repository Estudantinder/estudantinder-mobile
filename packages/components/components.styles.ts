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

export const SelectContainer = styled.View`
  margin-top: 20px;
`

export const SelectBackground = styled.View`
  background-color: ${theme.colors.input.background};
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

export const SubjectsPickerListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -8px;
`

export const ImagePickerCardContainer = styled(RectButton)`
  flex: 1;
  height: 240px;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${theme.colors.background.light_purple};
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
