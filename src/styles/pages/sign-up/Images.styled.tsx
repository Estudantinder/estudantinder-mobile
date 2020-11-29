import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
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
  justify-content: space-around;
  align-items: center;
`

const ProfilePicture = styled.View`
  justify-content: space-around;
  align-items: center;

  margin-top: 24px;
`

const ProfilePictureImage = styled(RectButton)`
  width: 75px;
  height: 75px;

  background-color: #ccc;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ProfilePictureText = styled.Text`
  font-size: 14px;
  margin-top: 16px;
`

const CardContainer = styled.View`
  background-color: #ff00ff;
`

const Card = styled(RectButton)`
  background-color: #ccc;
  width: 60px;
  height: 60px;

  margin: 16px;
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

export default {
  Container,
  Header,
  Main,
  Title,
  Footer,
  Button,
  ButtonText,
  ProfilePicture,
  ProfilePictureImage,
  ProfilePictureText,
  Card,
  CardContainer,
  Row,
}
