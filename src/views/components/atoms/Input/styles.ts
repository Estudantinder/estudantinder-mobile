import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;

  margin-top: 20px;
`

const Label = styled.Text`
  height: 16px;

  font-family: ${(props) => props.theme.fonts.input.label};
  color: ${(props) => props.theme.colors.input.label};

  margin-bottom: 10px;
`

export interface InputStyleProps {
  isActive: boolean
  isInvalid: boolean
}

const TextInput = styled.TextInput<InputStyleProps>`
  min-width: 100%;

  position: relative;

  padding: 4px 15px;

  background-color: ${(props) => props.theme.colors.input.background};
  color: ${(props) => props.theme.colors.input.active_text};

  border-width: 2px;
  border-color: ${(props) =>
    props.isActive
      ? props.theme.colors.input.active_border
      : props.isInvalid
      ? props.theme.colors.input.invalid
      : props.theme.colors.input.background};
  border-radius: 4px;
`

const Suffix = styled.View`
  position: absolute;
  right: 12px;

  width: 24px;
  height: 24px;

  margin-top: 34px;

  background-color: ${(props) => props.theme.colors.input.background};

  display: flex;
  justify-content: center;
  align-items: center;
`

const InvalidContainer = styled.View`
  height: 16px;
  width: 100%;

  margin-top: 6px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`

const InvalidIcon = styled(Feather).attrs({
  name: 'info',
  size: 14,
})`
  color: ${(props) => props.theme.colors.input.invalid};
`

const InvalidText = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  font-size: 12px;
  color: ${(props) => props.theme.colors.input.invalid};

  margin-left: 4px;
`

export default {
  Container,
  TextInput,
  InvalidText,
  Label,
  Suffix,
  InvalidContainer,
  InvalidIcon,
}
