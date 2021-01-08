import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`

const Button = styled(RectButton)`
  background-color: #0fad58;

  width: 290px;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`

export default { Container, Button, ButtonText }
