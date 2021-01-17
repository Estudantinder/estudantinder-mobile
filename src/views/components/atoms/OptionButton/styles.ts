import styled from 'styled-components/native'

interface ButtonStyleProps {
  isActive: boolean
}

const Button = styled.TouchableOpacity<ButtonStyleProps>`
  flex: 1;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 3px;

  background-color: ${(props) =>
    props.isActive ? props.theme.colors.primary.purple : '#fff'};
  border-width: 1px;
  border-color: ${(props) => props.theme.colors.primary.purple};
`

const ButtonText = styled.Text<ButtonStyleProps>`
  font-family: ${(props) => props.theme.fonts.button};

  color: ${(props) =>
    props.isActive ? '#fff' : props.theme.colors.primary.purple};
`

export default {
  Button,
  ButtonText,
}
