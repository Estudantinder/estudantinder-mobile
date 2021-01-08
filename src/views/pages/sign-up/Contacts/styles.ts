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

import Input from 'views/components/atoms/Input'

const FacebookInput = styled(Input)`
  background-color: #dfe5f2;
`
const InstagramInput = styled(Input)`
  background-color: #fde6ef;
`
const WhatsappInput = styled(Input)`
  background-color: #e0efdf;
`
const TwitterInput = styled(Input)`
  background-color: #d2ecfc;
`

export default {
  Container,
  Main,
  Scroll,
  FacebookInput,
  InstagramInput,
  WhatsappInput,
  TwitterInput,
}
