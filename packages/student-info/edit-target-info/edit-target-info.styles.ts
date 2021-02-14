import styled from 'styled-components/native'

import Input from 'packages/inputs/components/Input'
import { InputLabel } from 'packages/inputs/styles'

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
  padding-left: 24px;
  background-color: #dfe5f2;
  border-color: #dfe5f2;
`

export const InstagramInput = styled(Input)`
  padding-left: 24px;
  background-color: #fde6ef;
  border-color: #fde6ef;
`

export const WhatsappInput = styled(Input)`
  padding-left: 24px;
  background-color: #e0efdf;
  border-color: #e0efdf;
`

export const TwitterInput = styled(Input)`
  padding-left: 24px;
  background-color: #d2ecfc;
  border-color: #d2ecfc;
`
