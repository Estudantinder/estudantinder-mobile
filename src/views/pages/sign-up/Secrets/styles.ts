import styled from 'styled-components/native'

const Container = styled.KeyboardAvoidingView`
  flex: 1;

  justify-content: space-around;
  align-items: center;
`

const Main = styled.View`
  height: 300px;

  justify-content: space-between;
  align-items: center;
`

export default {
  Container,
  Main,
}
