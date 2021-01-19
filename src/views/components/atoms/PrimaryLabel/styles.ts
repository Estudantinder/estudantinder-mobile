import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding: 4px;

  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.primary.purple};
`

const Text = styled.Text`
  color: #ffffff;
  font-family: ${(props) => props.theme.fonts.button};
  font-size: 12px;
  align-items: center;
  text-align: center;
  line-height: 16px;
  letter-spacing: 0.6px;
`

export default { Container, Text }
