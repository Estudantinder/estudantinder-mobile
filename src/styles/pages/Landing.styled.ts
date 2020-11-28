import { RectButton, TouchableOpacity } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`

const Main = styled.View`
  height: 200px;

  justify-content: space-around;
  align-items: center;
`

const Title = styled.Text`
  font-size: 32px;
  text-align: center;
`

const Footer = styled.View`
  height: 200px;

  justify-content: space-around;
  align-items: center;
`

const SignUpButton = styled(RectButton)`
  background-color: #0fad58;

  width: 290px;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`

const SignUpText = styled.Text`
  color: #fff;
  font-size: 16px;
`

const SignInButton = styled(TouchableOpacity)`
  border-color: #0fad58;
  border-width: 2px;
  width: 290px;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;
`

const SignInText = styled.Text``

export default {
  Container,
  Main,
  Title,
  Footer,
  SignInButton,
  SignUpButton,
  SignInText,
  SignUpText,
}
