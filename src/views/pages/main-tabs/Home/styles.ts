import { RectButton } from 'react-native-gesture-handler'

import Constants from 'expo-constants'
import styled from 'styled-components/native'

import { Container as GlobalContainer, Row } from 'views/styles/globalStyles'

const Container = styled(GlobalContainer)`
  padding: 0px;
`

const Main = styled.View`
  flex: 1;
  width: 100%;
  padding: 0px 30px;
`

const TopBar = styled(Row)`
  justify-content: space-between;

  margin-bottom: 12px;
  background-color: ${(props) => props.theme.colors.primary.green};

  padding: 0px 16px;

  padding-bottom: 8px;
  padding-top: ${Constants.statusBarHeight + 8}px;

  elevation: 8;
`

const ButtonsContainer = styled(Row)`
  justify-content: space-around;
  margin: 12px 0px;
`

const Button = styled(RectButton)`
  border-radius: 999px;
  width: 52px;
  height: 52px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 5;
`

export default { Container, Main, TopBar, ButtonsContainer, Button }
