import styled from 'styled-components/native'

export interface InputStyleProps {
  isActive: boolean
  isInvalid: boolean
}

const TextInput = styled.TextInput<InputStyleProps>`
  min-width: 100%;
  min-height: 40px;

  padding: 4px 15px;

  background-color: ${(props) => props.theme.colors.input.background};
  color: ${(props) => props.theme.colors.input.active_text};
  font-family: ${(props) => props.theme.fonts.input.text};

  border-width: 2px;
  border-color: ${(props) =>
    props.isActive
      ? props.theme.colors.input.active_border
      : props.isInvalid
      ? props.theme.colors.input.error
      : props.theme.colors.input.background};
  border-radius: 4px;
`

export default {
  TextInput,
}
