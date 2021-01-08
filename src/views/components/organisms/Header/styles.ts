import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const Title = styled.Text`
  font-size: 32px;
  text-align: center;
`

const BackIcon = styled(Feather).attrs({
  name: 'arrow-left',
  size: 24,
  color: '#000',
})``

export default {
  Header,
  BackIcon,
  Title,
}
