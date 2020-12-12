import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled.View``

const Button = styled(RectButton)`
  height: 42px;
  width: 300px;

  background-color: #ccc;

  padding: 0px 16px;

  flex-direction: row;
  align-items: center;
`

const Label = styled.Text`
  margin-bottom: 8px;
  height: 20px;
`

const HelpMessage = styled.Text`
  width: 300px;
  color: #868686;
`

const TextError = styled.Text`
  color: #f00;
  height: 24px;
  width: 300px;
`

export default { Container, Button, Label, HelpMessage, TextError }
