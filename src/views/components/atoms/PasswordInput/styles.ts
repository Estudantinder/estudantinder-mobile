import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

const EyeIcon = styled(Feather).attrs({
  name: 'eye',
  size: 20,
  color: '#a8a8a8',
})``

const EyeOffIcon = styled(Feather).attrs({
  name: 'eye-off',
  size: 20,
  color: '#a8a8a8',
})``

export default {
  EyeIcon,
  EyeOffIcon,
}
