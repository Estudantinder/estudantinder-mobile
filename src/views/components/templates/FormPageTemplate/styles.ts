import Constants from 'expo-constants'
import styled from 'styled-components/native'

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding: 20px;
  padding-top: ${Constants.statusBarHeight + 20}px;
  padding-bottom: 0px;

  background-color: ${(props) => props.theme.colors.background.page};
`

const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`

const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.title};
  font-size: 20px;

  margin-bottom: 12px;
`

const Main = styled.View`
  min-height: 60%;
  width: 100%;

  justify-content: space-around;
  align-items: center;
`

export default { Container, Scroll, Title, Main }
