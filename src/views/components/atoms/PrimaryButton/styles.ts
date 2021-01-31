import { RectButton } from 'react-native-gesture-handler'

import styled from 'styled-components/native'

const Button = styled(RectButton)`
  background-color: ${(props) => props.theme.colors.primary.green};

  width: 100%;
  height: 45px;

  justify-content: center;
  align-items: center;

  border-radius: 10px;

  margin-bottom: 16px;
`

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.button};
  font-weight: 700;
  text-align: center;
  color: #fff;
`

export default {
  Button,
  ButtonText,
}
