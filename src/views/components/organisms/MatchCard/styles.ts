import { Dimensions } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

import { Row } from 'views/styles/globalStyles'

const Container = styled.View`
  min-height: ${Dimensions.get('window').height / 1.6}px;
  width: 100%;
  position: relative;
  margin-bottom: 40px;
`

const Image = styled.Image`
  flex: 1;
`

const TopBar = styled(Row)`
  position: absolute;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  height: 32px;
  justify-content: space-between;
`

const TopBarButton = styled(RectButton)`
  height: 100%;
  width: 40px;
  background-color: rgba(255, 255, 255, 0.6);
`

const TopBarTitle = styled.Text`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.titles.secondary};
  color: #fff;
  padding-top: 2px;
`

const ContactsContainer = styled(Row)`
  height: 36px;
  width: 100%;
`

export interface ContactButtonStylesProps {
  backgroundColor: string
}

const ContactButton = styled(RectButton)<ContactButtonStylesProps>`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
`

export default {
  Container,
  Image,
  TopBar,
  TopBarButton,
  TopBarTitle,
  ContactsContainer,
  ContactButton,
}
