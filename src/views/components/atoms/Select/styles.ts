import styled from 'styled-components/native'

const Container = styled.View`
  margin-top: 20px;
`

const PickerBackground = styled.View`
  background-color: ${(props) => props.theme.colors.input.background};
  border-radius: 4px;
`

export default { Container, PickerBackground }
