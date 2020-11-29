import styled from 'styled-components/native'

const Container = styled.View`
  margin-top: 12px;
`

const TextInput = styled.TextInput`
  height: 42px;
  width: 300px;

  background-color: #ccc;

  padding: 0px 16px;

  color: #0fad58;
`

const TextError = styled.Text``

const Label = styled.Text`
  margin-bottom: 8px;
`

export default { Container, TextInput, TextError, Label }
