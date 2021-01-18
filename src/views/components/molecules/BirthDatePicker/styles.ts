import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Button = styled.TouchableOpacity`
  min-width: 100%;
  height: 40px;

  background-color: ${(props) => props.theme.colors.input.background};

  padding: 4px 15px;

  flex-direction: row;
  align-items: center;

  margin-bottom: 4px;

  border-radius: 4px;
`

const ButtonText = styled.Text`
  font-family: ${(props) => props.theme.fonts.input.text};
  color: ${(props) => props.theme.colors.input.active_text};
`

const ArrowRightIcon = styled(Entypo).attrs({
  name: 'chevron-thin-right',
  size: 14,
  color: '#2d2d2d',
})`
  margin-bottom: 2px;
`

export default { Button, ButtonText, ArrowRightIcon }
