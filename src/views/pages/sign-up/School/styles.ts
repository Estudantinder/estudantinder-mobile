import Constants from 'expo-constants'
import styled from 'styled-components/native'

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const Main = styled.View`
  justify-content: space-between;
  align-items: center;
`

export default {
  Container,
  Main,
  Scroll,
}
