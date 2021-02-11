import styled from 'styled-components/native'

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
