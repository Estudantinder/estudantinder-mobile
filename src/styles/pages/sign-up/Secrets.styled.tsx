import { RectButton } from 'react-native-gesture-handler'

import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;

  justify-content: space-around;
  align-items: center;
`

const Header = styled.View``

const Title = styled.Text`
  font-size: 32px;
  text-align: center;
`

const Main = styled.View`
  height: 300px;

  justify-content: space-between;
  align-items: center;
`

const Footer = styled.View``

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

const Icon = styled(Feather).attrs({
  name: 'eye',
  size: 20,
  color: '#000',
})``

export default {
  Container,
  Header,
  Title,
  Main,
  Footer,
  Button,
  ButtonText,
  Icon,
}
