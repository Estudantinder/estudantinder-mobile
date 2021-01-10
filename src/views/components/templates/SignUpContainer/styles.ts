import Constants from 'expo-constants'
import styled from 'styled-components/native'

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  width: 100%;

  justify-content: space-around;
  align-items: center;

  padding: 30px;
  padding-top: ${Constants.statusBarHeight + 10}px;
  padding-bottom: 12px;

  background-color: #f5f5f5;
`

const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export default { Container, Scroll }
