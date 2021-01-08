import Constants from 'expo-constants'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
  padding: 12px;
`

const Main = styled.View`
  justify-content: space-between;
  align-items: center;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-bottom: 20px;
  width: 100%;
`

const BlankImage = styled.View`
  width: 100px;
  height: 100px;
`

const Header = styled.View``

export default {
  Container,
  Main,
  Row,
  Header,
  BlankImage,
}
