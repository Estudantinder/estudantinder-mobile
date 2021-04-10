import { Dimensions } from 'react-native'

import styled from 'styled-components/native'

import Input from 'packages/inputs/components/Input'
import { InputLabel } from 'packages/inputs/input.styles'
import { fonts } from 'packages/styles/theme'

export const BirthDatePickerButton = styled.TouchableOpacity`
  min-width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.input.background};
  padding: 4px 15px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  border-radius: 4px;
`

export const BirthDatePickerText = styled.Text`
  font-family: ${fonts.input.text};
  color: ${(props) => props.theme.input.active_text};
`

export const GenderPickerOrText = styled(InputLabel)`
  text-align: center;
  justify-content: center;

  margin-bottom: -10px;
  margin-top: 10px;
`

export const FacebookInput = styled(Input)`
  background-color: ${(props) => props.theme.pages.contacts.inputs.facebook};
  border-color: ${(props) => props.theme.pages.contacts.inputs.facebook};
`

export const InstagramInput = styled(Input)`
  background-color: ${(props) => props.theme.pages.contacts.inputs.instagram};
  border-color: ${(props) => props.theme.pages.contacts.inputs.instagram};
`

export const WhatsappInput = styled(Input)`
  background-color: ${(props) => props.theme.pages.contacts.inputs.whatsapp};
  border-color: ${(props) => props.theme.pages.contacts.inputs.whatsapp};
`

export const TwitterInput = styled(Input)`
  background-color: ${(props) => props.theme.pages.contacts.inputs.twitter};
  border-color: ${(props) => props.theme.pages.contacts.inputs.twitter};
`

export const TextAreaInput = styled(Input)`
  min-height: 80px;
  max-height: 160px;
  padding-top: 12px;
`

export const PhotosCarrouselContainer = styled.View`
  margin: 40px 0px;
  width: ${Dimensions.get('window').width}px;
  flex: 1;
`
