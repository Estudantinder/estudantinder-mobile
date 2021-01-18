import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
  height: 16px;
  width: 100%;

  margin-top: 6px;

  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`

const Icon = styled(Feather).attrs({
  name: 'info',
  size: 14,
})`
  color: ${(props) => props.theme.colors.input.invalid};
`

const Text = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.label};
  font-size: 12px;
  color: ${(props) => props.theme.colors.input.invalid};

  margin-left: 4px;

  height: 16px;
  width: 90%;

  overflow: hidden;
`

export default { Container, Icon, Text }
