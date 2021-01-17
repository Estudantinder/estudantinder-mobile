import { BorderlessButton } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons'
import styled from 'styled-components/native'

const Container = styled(BorderlessButton)`
  position: absolute;
  left: 0px;
  top: 0px;
`

const Icon = styled(Entypo).attrs({
  name: 'chevron-thin-left',
  size: 20,
  color: '#000',
})``

export default {
  Container,
  Icon,
}
