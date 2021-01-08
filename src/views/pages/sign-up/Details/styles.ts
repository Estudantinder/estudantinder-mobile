import Constants from 'expo-constants'
import styled from 'styled-components/native'

import Input from 'views/components/atoms/Input'

const Container = styled.KeyboardAvoidingView`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding-top: ${Constants.statusBarHeight}px;
`

const Scroll = styled.ScrollView`
  flex: 1;
`

const TextAreaInput = styled(Input)`
  height: 80px;
  padding-top: 12px;
`

const Main = styled.View`
  justify-content: space-between;
  align-items: center;
`

export default {
  Container,
  Main,
  Scroll,
  TextAreaInput,
}
