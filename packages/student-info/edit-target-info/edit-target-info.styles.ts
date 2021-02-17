import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import Input from 'packages/inputs/components/Input'
import { InputLabel } from 'packages/inputs/styles'
import theme from 'packages/styles/theme'

export const BirthDatePickerButton = styled.TouchableOpacity`
  min-width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.input.background};
  padding: 4px 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 4px;
`

export const BirthDatePickerText = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.text};
  color: ${(props) => props.theme.colors.input.active_text};
`

export const GenderPickerOrText = styled(InputLabel)`
  text-align: center;
  justify-content: center;

  margin-bottom: -10px;
  margin-top: 10px;
`

export const FacebookInput = styled(Input)`
  background-color: #dfe5f2;
  border-color: #dfe5f2;
`

export const InstagramInput = styled(Input)`
  background-color: #fde6ef;
  border-color: #fde6ef;
`

export const WhatsappInput = styled(Input)`
  background-color: #e0efdf;
  border-color: #e0efdf;
`

export const TwitterInput = styled(Input)`
  background-color: #d2ecfc;
  border-color: #d2ecfc;
`

export const TextAreaInput = styled(Input)`
  min-height: 80px;
  max-height: 160px;
  padding-top: 12px;
`

export const SubjectsPickerListContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: -8px;
`

export const PhotosCarrouselContainer = styled.View`
  margin: 40px 0px;
  width: ${Dimensions.get('window').width}px;
  flex: 1;
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
