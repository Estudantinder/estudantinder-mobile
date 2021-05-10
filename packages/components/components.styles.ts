import { BorderlessButton, RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import { fonts } from 'packages/styles/theme'
import theme from 'packages/utils/theme'

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
  background-color: ${(props) => theme(props).base.green};
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 16px;
`

export const PrimaryButtonText = styled.Text`
  font-family: ${fonts.button};
  font-weight: 700;
  text-align: center;
  color: ${(props) => theme(props).text.button};
`

export const SelectContainer = styled.View`
  margin-top: 20px;
`

export const SelectBackground = styled.View`
  background-color: ${(props) => theme(props).input.background};
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
  background-color: ${(props) => theme(props).base.purple};
`

export const PrimaryLabelText = styled.Text<PrimaryLabelStylesProps>`
  color: #ffffff;
  font-family: ${fonts.primary};
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

export const MenuCardContainer = styled(RectButton)`
  height: 64px;
  width: 100%;

  flex-direction: row;
  align-items: center;
`
export const MenuCardIcon = styled.View`
  width: 32px;
  height: 32px;

  justify-content: center;
  align-items: center;

  margin: 0px 20px;
`

export const MenuCardTitle = styled.Text`
  font-family: ${fonts.subtitle};
  font-size: 16px;
  line-height: 16px;
  color: ${(props) => theme(props).text.default};
`

export const MenuCardSuffix = styled.View`
  flex: 1;
  justify-content: flex-end;
  flex-direction: row;
  padding-right: 32px;
`
