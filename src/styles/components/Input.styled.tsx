import styled from 'styled-components/native'

const Container = styled.View`
  margin-top: 10px;
`

const TextInput = styled.TextInput`
  height: 42px;
  width: 300px;

  background-color: #ccc;

  padding: 0px 16px;

  color: #0fad58;

  position: relative;
`

const TextError = styled.Text`
  color: #f00;
  height: 24px;
  width: 300px;
`

const Label = styled.Text`
  margin-bottom: 8px;
  height: 20px;
`

const Suffix = styled.View`
  position: absolute;
  right: 0px;

  margin-top: 28px;
  background-color: #ccc;
  width: 44px;
  height: 42px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export default { Container, TextInput, TextError, Label, Suffix }
