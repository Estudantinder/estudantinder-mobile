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

  background-color: #f5f5f5;
`

const Scroll = styled.ScrollView`
  flex: 1;
  width: 100%;
`

export default { Container, Scroll }
