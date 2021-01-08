import { RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View``

const Image = styled.Image`
  width: 100%;
  height: 100%;
`

const Button = styled(RectButton)`
  width: 32px;
  height: 32px;
  background-color: #f00;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`

const ButtonIcon = styled(Feather).attrs({
  name: 'x',
  color: '#fff',
  size: 16,
})``

export default {
  Container,
  Image,
  Button,
  ButtonIcon,
}
