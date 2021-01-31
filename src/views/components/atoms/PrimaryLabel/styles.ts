import styled from 'styled-components/native'

const Container = styled.View`
  height: 20px;

  align-items: center;
  justify-content: center;

  padding: 4px 0px;
  flex-grow: 1;

  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary.purple};
`

const Text = styled.Text`
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.primary};
  font-size: 12px;
  align-items: center;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.6px;
`

export default { Container, Text }
